import Vue from 'vue'
import App from './SocialMediaApp.vue';
import Router from 'vue-router';


import SocialMediaLogin from "./SocialMediaLogin";
import SocialMediaBaseCard from "./SocialMediaBaseCard";
Vue.component('social-media-login', SocialMediaLogin);

Vue.component('social-media-base-card', SocialMediaBaseCard);
Vue.config.productionTip = false;

new Vue({
    Router, // we tell our vue instance to use this vue router
    render: h => h(App),
}).$mount('#app');

Vue.use(Router);

export default new Router({
    routes: [
        { path:'/SocialMediaLogin', component: SocialMediaLogin }
    ]
})