import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../page/Home.vue'
const Home = () => import('../page/Home.vue')
const login = () => import('../page/login.vue')
Vue.use(Router)

// const routerList = []
// function importAll (r) {
//   r.keys().forEach(key => {
//     console.log(key)
//     routerList.push(r(key).default)
//   })
// }
// importAll(require.context('./', false, /\.routers\.js/))
// console.log(routerList)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '../page/About.vue')
    }
  ]
})
