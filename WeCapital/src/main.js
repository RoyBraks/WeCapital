import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'


import cryptoWallet from './views/cryptowallet.vue'
import Account from './views/account.vue'
import AdvancedCharts from './views/advancedcharts.vue'
import Settings from './views/settings.vue'
import More from './views/more.vue'
import Home from './views/home.vue'
import Signup from './views/signup.vue'

const app = createApp(App)

const router = VueRouter.createRouter({
    mode: 'history',
    history: VueRouter.createWebHashHistory(),
    routes: [
        {path: '/cryptowallet', component: cryptoWallet},
        {path: '/account', component: Account},
        {path: '/Advancedcharts', component: AdvancedCharts},
        {path: '/settings', component: Settings},
        {path: '/more', component: More},
        {path: '/', component: Home},
        {path: '/signup', component: Signup}
    ]
})

app.use(router).mount('#app')
