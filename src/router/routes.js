
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/home',
        component: () => import('pages/Home/DefaultFrame.vue')
      },
      {
        path: '/character',
        component: () => import('pages/Character/CharacterView.vue')
      },
      {
        path: '/works',
        component: () => import('pages/Work/WorkView.vue')
      },
      {
        path: '/log',
        component: () => import('pages/Log/LogView.vue')
      },
      {
        path: '/trpg',
        component: () => import('pages/TRPG/TRPGView.vue')
      },
      {
        path: '/load',
        component: () => import('pages/LoadBi/LoadBiView.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
