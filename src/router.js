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
      component: () => import('./pages/home/Home')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('./pages/cadastro/Cadastro')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./pages/carrinho/Carrinho')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./components/add-livro/AddLivro')
    },
    {
      path: '/profile-edit',
      name: 'profile-edit',
      component: () => import('./pages/editar-perfil/EditarPerfil')
    },
    {
      path: '/profile-info',
      name: 'profile-info',
      component: () => import('./pages/meu-perfil/MeuPerfil')
    },
    {
      path: '/book-info',
      name: 'book-info',
      props: true,
      component: () => import('./pages/sobre-livro/SobreLivro')
    },
    {
      path: '/book-edit',
      name: 'book-edit',
      props: true,
      component: () => import('./pages/editar-livro/EditarLivro')
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
