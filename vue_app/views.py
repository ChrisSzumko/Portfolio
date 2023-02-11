from django.shortcuts import render


# Default Vue View that will automatically push vue router to /about URL.
def vue_app_main(request):
    context = {
        'example_vue_app_props': {
            'fromDjango': '/about'
        }
    }
    return render(request, 'vue_main.html', context=context)


# When /experience URL is accessed push to corresponding Vue router.
def vue_app_experience(request):
    context = {
        'example_vue_app_props': {
            'fromDjango': '/experience'
        }
    }
    return render(request, 'vue_main.html', context=context)


# When /projects URL is accessed push to corresponding Vue router.
def vue_app_projects(request):
    context = {
        'example_vue_app_props': {
            'fromDjango': '/projects'
        }
    }
    return render(request, 'vue_main.html', context=context)


# When /contact URL is accessed push to corresponding Vue router.
def vue_app_contact(request):
    context = {
        'example_vue_app_props': {
            'fromDjango': '/contact'
        }
    }
    return render(request, 'vue_main.html', context=context)
