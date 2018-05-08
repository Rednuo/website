import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Help from '@/components/Help'
import About from '@/components/About'


Vue.use(Router);

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'index',
      component: Index
    },
    {//需跳转的页面
      path:'/help',
      name:'help',
      component:Help
    },
    {//需跳转的页面
      path:'/about',
      name:'about',
      component:About
    }
  ]
})
