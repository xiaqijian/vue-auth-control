// "use strict";

// tools.js

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(function (role) {
      return route.meta.role.indexOf(role) >= 0;
    });
  } else {
    return true;
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param {Array} asyncRouterMap
 * @param {Array} roles 
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  var accessedRouters = asyncRouterMap.filter(function (route) {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  });
  console.log('包')
  console.log(accessedRouters)
  return accessedRouters;
};

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
function hasOneOf(targetarr, arr) {
  return targetarr.some(function (_) {
    return arr.indexOf(_) > -1;
  });
};

module.exports = {
  hasOneOf: hasOneOf,
  filterAsyncRouter: filterAsyncRouter
};