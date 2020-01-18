import Vue from 'vue'
import Router from 'vue-router'
import Api from '../components/Api.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/api/:id',
            name: 'api',
            component: Api
        }
    ]
})

export default router