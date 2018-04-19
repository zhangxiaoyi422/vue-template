import Vue from 'vue'
import Router from 'vue-router'
// import a from './modules/a'
// import b from './modules/b'
// import HelloWorld from 'resolve => require(['@/components/HelloWorld'],resolve)'
// 路由懒加载
const HelloWorld = r => require.ensure([], () => r(require("../components/HelloWorld")));

Vue.use(Router)

export default new Router({
  // mode:history,
  routes: [
    {
      path: '/a',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
