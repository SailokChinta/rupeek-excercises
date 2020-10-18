import Vue from 'vue';
import Router from 'vue-router';

Vue.use( Router );

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import( '@/components/Home' )
        },
        {
            name: 'workshops',
            path: '/workshops',
            component: () => import( '@/components/WorkshopsList' )
        },
        {
            name: 'workshop-details',
            path: '/workshop-details/:id',
            component: () => import( '@/components/WorkshopDetails' )
        }
    ]
})