import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Retrospect from '@/components/Retrospect'
import Album from '@/components/Album'
import Technology from '@/components/Technology'
import childhood from '@/components/article/retrospect/childhood'
import hometown from '@/components/article/album/hometown'


Vue.use(Router);

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'index',
      component: Index
    },
    {//需跳转的页面
      path:'/Retrospect',
      name:'retrospect',
      component:Retrospect
    },
    {//需跳转的页面
      path:'/Album',
      name:'album',
      component:Album
    },
    {//需跳转的页面
      path:'/Technology',
      name:'technology',
      component:Technology
    },
    {//需跳转的页面
      path:'/article/retrospect/childhood',
      name:'childhood',
      component:childhood
    },
    {//需跳转的页面
      path:'/article/album/hometown',
      name:'hometown',
      component:hometown
    }
  ]
})
