import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './index.js';
import App from './App.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import SearchByNamePage from './components/pages/SearchByNamePage.vue';
import AboutUsPage from './components/pages/AboutUsPage.vue';
import ContactPage from './components/pages/ContactPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/name' },
        { path: '/name', component: SearchByNamePage, children: [
            { path: '/name/:name', component: SearchByNamePage }
        ] },
        { path: '/aboutus', component: AboutUsPage },
        { path: '/contact', component: ContactPage },
    ]
});

const app = createApp(App);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-dialog', BaseDialog);
app.component('base-spinner', BaseSpinner);
app.use(router);
app.use(store);
app.mount('#app');