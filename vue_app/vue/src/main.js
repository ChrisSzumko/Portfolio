import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

const propJson = document.getElementById('example_vue_app_props').textContent
const props = JSON.parse(propJson)

// Components for routing.
import AboutMain from "@/components/about/AboutMain.vue";
import ExperienceMain from "@/components/experience/ExperienceMain.vue";
import WorkMain from "@/components/work/WorkMain.vue";
import ContactMain from "@/components/contact/ContactMain.vue";

// Routing components to URLs.
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/about', component: AboutMain},
        { path: '/experience', component: ExperienceMain},
        { path: '/projects', component: WorkMain},
        { path: '/contact', component: ContactMain},
    ]
});

const vueApp = createApp(App, props)
vueApp.use(router);
vueApp.mount('#example_vue_app_container')
