import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue'),
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('./components/swiper.vue'),
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('./components/video.vue'),
    },
    
    {
      path: '/vueplayer',
      name: 'vueplayer',
      component: () => import('./components/vueplayer.vue'),
    },
    {
      path: '/hytest',
      name: 'hytest',
      component: () => import('./components/hytest.vue'),
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: () => import('./components/echarts.vue'),
    },
    {
      path: '/bdmap',
      name: 'bdmap',
      component: () => import('./components/bdmap.vue'),
    },
    {
      path: '/gdmap',
      name: 'gdmap',
      component: () => import('./components/gdmap.vue'),
    },
    {
      path: '/autoscroll',
      name: 'autoscroll',
      component: () => import('./components/autoscroll.vue'),
    },
    {
      path: '/hero',
      name: 'hero',
      component: () => import('./components/hero.vue'),
    },
    {
      path: '/h5steam',
      name: 'h5steam',
      component: () => import('./components/h5steam.vue'),
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('./components/calendar.vue'),
    },
  ]
})
