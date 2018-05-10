import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import login from '@/view/login'
import Retrospect from '@/components/Retrospect'
import Album from '@/components/Album'
import Technology from '@/components/Technology'
import childhood from '@/components/article/retrospect/childhood'
import hometown from '@/components/article/album/hometown'
import web from '@/components/article/technology/web'
import personalDate from '@/components/article/introduction/personalDate'
import faqs from '@/components/article/introduction/faqs'
import copyright from '@/components/article/introduction/copyright'


Vue.use(Router);

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'index',
      component: Index
    },
    {//首页
      path: '/login',
      name: 'login',
      component: login
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
    },
    {//需跳转的页面
      path:'/article/technology/web',
      name:'web',
      component:web
    },
    {//需跳转的页面
      path:'/article/introduction/personalDate',
      name:'personalDate',
      component:personalDate
    },
    {//需跳转的页面
      path:'/article/introduction/faqs',
      name:'faqs',
      component:faqs
    },
    {//需跳转的页面
      path:'/article/introduction/copyright',
      name:'copyright',
      component:copyright
    }
  ]
})
