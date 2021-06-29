import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './pages/home/Home')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import(/* webpackChunkName: "about" */ './pages/cadastro/Cadastro')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "about" */ './pages/cadastro/Cadastro')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "about" */ './components/add-livro/AddLivro')
    },
    {
      path: '/profile-edit',
      name: 'profile-edit',
      component: () => import(/* webpackChunkName: "about" */ './pages/cadastro/Cadastro')
    },
    {
      path: '/profile-info',
      name: 'profile-info',
      component: () => import(/* webpackChunkName: "about" */ './pages/cadastro/Cadastro')
    },
    {
      path: '/detalhes',
      name: 'detalhes',
      component: () => import(/* webpackChunkName: "about" */ './pages/cadastro/Cadastro')
    }
  ]
})

/* router.beforeEach((to, from, next) => {
  if (!window.uid && (to.name !== 'home' || to.name !== 'detalhes' || to.name !== 'cadastro')) {
    next({ name: 'home' })
  } else if (window.uid && !window.admin && (to.name === 'admin')) {
    next({ name: 'profile-info' })
  } else {
    next()
  }
}) */

export default router
