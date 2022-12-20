import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'


import Wallet from './views/wallet.vue'
import Account from './views/account.vue'
import AdvancedCharts from './views/advancedcharts.vue'
import Settings from './views/settings.vue'
import More from './views/more.vue'
import Home from './views/home.vue'

// wallet pages

import Crypto from '@/views/wallet/crypto.vue'

const app = createApp(App)

const router = VueRouter.createRouter({
    mode: 'history',
    history: VueRouter.createWebHashHistory(),
    routes: [
        {path: '/wallet', component: Wallet,
        children: [
            {
                path: '/crypto',
                name: Crypto,
            }
        ]
        },
        {path: '/account', component: Account},
        {path: '/Advancedcharts', component: AdvancedCharts},
        {path: '/settings', component: Settings},
        {path: '/more', component: More},
        {path: '/', component: Home}
    ]
})

app.use(router).mount('#app')
