import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from 'resolve => require(['@/components/HelloWorld'],resolve)'
// 路由懒加载
const HelloWorld = r => require.ensure([], () => r(require("../components/HelloWorld")));

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
