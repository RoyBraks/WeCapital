import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'


import Wallet from './views/wallet.vue'
import Account from './views/account.vue'
import AdvancedCharts from './views/advancedcharts.vue'
import Settings from './views/settings.vue'
import More from './views/more.vue'
import Login from './views/login.vue'


const router = VueRouter.createRouter({
    mode: 'history',
    history: VueRouter.createWebHashHistory(),
    routes: [
        {path: '/wallet', Component: Wallet},
        {path: '/account', Component: Account},
        {path: '/Advancedcharts', Component: AdvancedCharts},
        {path: '/settings', Component: Settings},
        {path: '/more', Component: More},
        {path: '/', Component: Login}
    ]
})

createApp(App).mount('#app')
