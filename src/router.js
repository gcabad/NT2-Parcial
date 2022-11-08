import Vue from 'vue'
import VueRouter from 'vue-router'

import Gastos from './componentes/Gastos.vue'
import Multiplechoice from './componentes/Multiplechoice.vue'

/* import Binding from './componentes/Binding.vue' */

Vue.use(VueRouter)

//INSTALL ROUTER: npm i vue-router@3

export const router = new VueRouter({
    mode: 'history',
    routes: [
         { path: '/', redirect: '/gastos' }, 
         { path: '/gastos', component: Gastos },
         { path: '/multiplechoice', component: Multiplechoice },
    ]
})