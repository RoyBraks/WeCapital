import { createApp } from 'vue'
import { createPinia } from "pinia";
import * as VueRouter from 'vue-router'
import App from './App.vue'
import {Tabs, Tab} from 'vue3-tabs-component';

const pinia = createPinia();

import cryptoWallet from './views/cryptowallet.vue'
import Account from './views/account.vue'
import AdvancedCharts from './views/advancedcharts.vue'
import Settings from './views/settings.vue'
import News from './views/news.vue'
import Home from './views/home.vue'
import Signup from './views/signup.vue'

const router = VueRouter.createRouter({
    mode: 'history',
    history: VueRouter.createWebHashHistory(),
    routes: [
        {path: '/cryptowallet', component: cryptoWallet},
        {path: '/account', component: Account},
        {path: '/Advancedcharts', component: AdvancedCharts},
        {path: '/settings', component: Settings},
        {path: '/news', component: News},
        {path: '/', component: Home},
        {path: '/signup', component: Signup}
    ]
})

const app = createApp(App)

app
.use(pinia)
.use(router)
.component('tabs', Tabs)
.component('tab', Tab)
.mount('#app')