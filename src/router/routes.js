
const routes = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/index',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/',
        component: () => import('pages/Home/DefaultFrame.vue')
      },
      {
        path: '/character',
        component: () => import('pages/Character/CharacterView.vue')
      },
      {
        name: 'character:detail',
        path: `/character/detail/:sn`,
        component: () => import('pages/Character/components/CharacterDetail.vue'),
        props: true
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
