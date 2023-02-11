# Django Vue Template

This is an example project showing how a Vue application can be integrated into Django.

## Installation

In the Django project root directory: `pip install -r requirements.txt`

In the my_django_app/example_vue_app/ directory: `npm install`

## How it Works

There are 2 main factors to consider here:
1) Setting up the Django template to allow the Vue application to mount to it
2) Placing built Vue static files in a location Django can find
3) Passing data from Django's views into the Vue application

### 1) Setting up the Django template
Vue needs an empty `<div>` element to mount to, and then we need to load in the Vue stylesheet and JavaScript files.
This means the bare minimum HTML body looks something like this:
```html
<body>
{% load static %}
<link rel="stylesheet" href="{% static 'example_vue_app/css/app.css' %}">
<div id="example_vue_app_container"></div>
<script src="{% static 'example_vue_app/js/app.js' %}"></script>
<script src="{% static 'example_vue_app/js/chunk-vendors.js' %}"></script>
</body>
```

With those few lines, you can get a Vue application to run within a Django template. You can of course add any other
HTML, CSS, or JS above or below this structure.

Of course, you need to let your Vue application know what `<div>` you want it to mount to. That's done in `main.js`:

```javascript
import { createApp } from 'vue'
import App from './App.vue'

const vueApp = createApp(App)
vueApp.mount('#example_vue_app_container')
```

Compared to the standard `main.js` file, we've split the call of `createApp(App).mount('<div ID here>')`
over 2 lines. That's not strictly necessary, but it comes in handy later if you want to add extra modules in, so I
recommend it.

You'll notice that we're looking for a CSS file and two JavaScript ones. The next section will deal with how those files
are generated in the place where Django expects to find them.

### 2) Placing Vue static files in the right location

This is done by configuring `vue.config.js` correctly. The main settings are the `publicPath` and `outputDir` which need
to match one of the directories you've configured Django to check for static files.

```javascript
const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  publicPath: '/static/example_vue_app/', // Should be STATIC_URL + path/to/build
  outputDir: path.resolve(__dirname, '../static/example_vue_app/'), // Output to a directory in STATICFILES_DIRS
  filenameHashing: false, // Django will hash file names, not webpack
  runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  devServer: {
    devMiddleware: {
      writeToDisk: true // Write files to disk in dev mode, so Django can serve the assets
    },

  }
})
```

There's one other important setting in here: `devServer.devMiddleware.writeToDisk`. Normally when you run your Vue app
using `npm run serve`, and access it through the webpack development server, changes you make to the component files are
automatically loaded into your browser. When you change a component, a 'hotfix' JavaScript or CSS file is loaded into
the dev server's memory and then served to your browser.

But in our use-case, Django will be serving the files. So these hotfix files need to be written to disk in a location
Django can find - otherwise you'd have to `npm run build` every time you changed a component.

That's all good stuff - you now have a Vue application being served by Django, instead of by the webpack dev server.
Once you've built your static files, they'll be fully functional without you having any servers running except Django.

But we also want to be able to get data from Django into our Vue apps. You could do that by having your Vue app make
API calls (and that's the best option for anything which you want to validate - e.g. if you want to check a user has
access to a resource).

But for initial data, we can pass props into the Vue application...

### 3) Passing data from Django into Vue

Vue application props need to be a JavaScript object, which for our purposes means we need JSON data stored somewhere
in our Django template. This is best done with the `|json_script` Django template tag - see the docs for details.

Implementing it is pretty simple. Add the object you want to pass into your Vue app into your template context:

```python
from django.shortcuts import render

def example_vue_app(request):
    context = {
        'example_vue_app_props': {
            'fromDjango': 'A string passed in as a prop from Django'
        }
    }
    return render(request, 'my_django_app/example_vue_app.html', context=context)
```

Next, you'll want to update your template to do something with these props. Use the template tag to put them in a 
`<script>` tag with the ID `#example_vue_app_props`:

```html
{{ example_vue_app_props|json_script:"example_vue_app_props" }}
```

Then, update your Vue application to expect props with the same names as the keys in your Python dictionary. Here I 
provide a default value, so you can easily tell if the prop has successfully been passed in to your application:

```javascript
export default {
  name: 'App',
  props: {
    fromDjango: {
      type: String,
      default() {return "This is the default value - not provided by Django"}
    }
  },
}
```

The final step is to load the JSON from the `<script>` tag we created, and pass it in to the Vue app as props. This is
done in your Vue app's `main.js`. The props are passed as the second argument to `createApp`. Updated `main.js`:

```javascript
import { createApp } from 'vue'
import App from './App.vue'

const propJson = document.getElementById('example_vue_app_props').textContent
const props = JSON.parse(propJson)

const vueApp = createApp(App, props)
vueApp.mount('#example_vue_app_container')
```

If all has worked well, the values you passed in as props will be available to `App.vue`.