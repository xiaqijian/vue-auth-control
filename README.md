# vue-auth-control

![npm version](https://img.shields.io/badge/npm-1.0.0-brightgreen.svg)

vue项目, 路由控制方案，里面包含页面权限控制，单个按钮权限空


## Install

```
npm install vue-auth-control --save

```

## Usge

```javascript

import { filterAsyncRouter } from 'vue-auth-control'

const role = ['admin'];
const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    name: '权限测试',
    meta: { role: ['admin','super_editor'] }, //页面需要的权限
    children: [
    { 
      path: 'index',
      component: Permission,
      name: '权限测试页',
      meta: { role: ['admin','super_editor'] }  //页面需要的权限
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
];

const filterRouter = filterAsyncRouter(asyncRouterMap, role )

```