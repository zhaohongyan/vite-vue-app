import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/page/home/index.vue'
import LoginView from '@/page/login/index.vue'

import UserIndex from '@/page/user/index.vue';
import UserList from '@/page/user/list.vue';
import UserAdd from '@/page/user/add.vue';
import UserEdit from '@/page/user/edit.vue';
import UserDetail from '@/page/user/detail.vue';

import NotFound from '@/page/404.vue'

const routes = [
  { path: '/', redirect: '/login', name: '' },
  { path: '/login', component: LoginView, name: 'login' },
  { path: '/home', component: HomeView, name: 'home' },

  {
    path: '/user', component: UserIndex,
    children: [
      {
        path: 'list', component: UserList
      },
      {
        path: 'add', component: UserAdd
      },
      {
        path: 'edit/:id', component: UserEdit
      },
      {
        path: 'detail/:id', component: UserDetail
      }
    ]
  },
  // { path: '/404', component: NotFound},
  // { path: '/:pathMatch(.*)', redirect: '/404'}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;