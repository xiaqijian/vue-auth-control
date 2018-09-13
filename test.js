import {filterAsyncRouter } from 'vue-auth-control'


const roles = ['admin'];
const asyncRouterMap = [
  {
    path: '/permission',
    // component: Layout,
    name: '权限测试',
    meta: { role: ['admin','super_editor'] }, //页面需要的权限
    children: [
    { 
      path: 'index',
    //   component: Permission,
      name: '权限测试页',
      meta: { role: ['admin','super_editor'] }  //页面需要的权限
    }]
  },
  {
    path: '/permission',
    // component: Layout,
    name: '权限测试',
    meta: { role: ['admin1','super_editor'] }, //页面需要的权限
    children: [
    { 
      path: 'index',
    //   component: Permission,
      name: '权限测试页',
      meta: { role: ['admin1','super_editor'] }  //页面需要的权限
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
];


var testRouter = filterAsyncRouter(asyncRouterMap, roles)

console.log(testRouter)