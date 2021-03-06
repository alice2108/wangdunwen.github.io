import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Loading from '@/components/loading/Loading'
import Cesium from '@/components/cesium/Cesium'
import Leaflet from '@/components/leaflet/Leaflet'
import Page from '@/components/page/Page'

Vue.use(Router);

let router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'loading',
            component: Loading
        },
        {
            path: '/main',
            name: 'main',
            component: Main,
            // children: [
            //     {
            //         path: '/main/article/:id',
            //         name: 'article',
            //         component: Main
            //     }
            // ]
        },
        {
            path: '/cesium',
            name: 'cesium',
            component: Cesium
        },
        {
            path: '/leaflet',
            name: 'leaflet',
            component: Leaflet
        },
        {
            path: '/page',
            name: 'page',
            component: Page
        }
    ]
});

/*自动刷新，路由重定向到根路由*/
// router.beforeEach((to, from, next) => {
//     if(from.name === null && to.name !== 'loading') {
//         next('/');
//     }else {
//         next();
//     }
// });

export default router;

