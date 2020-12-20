import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { canUserAccess } from '@/authority'

import Layout from '@/layout/layout/layout.vue'
import Login from '@/views/login/login.vue'

import Home from '@/views/home/home.vue'
import Test from '@/views/Test.vue'
import Demo from '@/views/Demo.vue'

import Depart from '@/views/sys/depart.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        name: 'home',
        path: 'home',
        component: Home,
        meta: {
          title: '首页',
          icon: '23',
        },
      },
      {
        name: 'depart',
        path: 'depart',
        component: Depart,
        meta: {
          title: '部门',
          icon: '1',
        },
      },
      {
        name: 'test',
        path: 'test',
        component: Test,
        meta: {
          title: '测试',
          icon: '23',
        },
        children: [
          {
            name: 'demo',
            path: 'demo',
            component: Demo,
            meta: {
              title: 'demo',
              icon: '23',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]
const app = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 全局路由前置钩子
app.beforeEach(async () => {
  await canUserAccess()
})

export default app
