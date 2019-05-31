import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './components/NotFound.vue'
import { D3, Start, Other } from './views/D3'

Vue.use(Router)

export default new Router({
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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/paper',
      name: 'paper',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Paper/Paper.vue')
    },
    {
      path: '/d3',
      name: 'd3',
      component: D3,
      children: [
        {
          path: 'start',
          name: 'd3-start',
          component: Start,
        },
        {
          path: 'other',
          name: 'd3-other',
          component: Other,
        }
      ]
    },



    {
      // 会匹配所有路径
      path: '*',
      component: NotFound
    }
  ]
})
