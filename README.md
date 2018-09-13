# vue-auth-control

![npm version](https://img.shields.io/badge/npm-1.0.0-brightgreen.svg)

vue项目, 路由控制方案，里面包含页面权限控制，单个按钮权限空


## Install

```
npm install vue-auth-control --save

```

## Usge

```javascript

import {filterAsyncRouter, hasOneOf } from 'vue-auth-control'
 
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

const hasOneOfVal = hasOneOf(['admin', 'super_editor', ['admin']]) // true
```
## API

#### filterAsyncRouter

这个是用来过滤路由的，返回的是在这权限内的路由

- 参数

```
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param {Array} asyncRouterMap
 * @param {Array} roles 
 */

filterAsyncRouter(asyncRouterMap, roles)

```

#### hasOneOf

其实，就是一个查询数组内的元素是否在里面，返回false和true

```
/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */

 hasOneOf(target, arr)
```