import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 首页下 的  新建居民档案   关联家人
  {
    path: '/peoper',
    name: 'Peoper',
    component: () => import('../views/Index/Peoper.vue')
  },
  // 选择家庭成员
  {
    path: '/family_member',
    name: 'Family_member',
    component: () => import('../views/Index/Family_member.vue')
  },
  // 填写签约信息
  {
    path: '/sign_contract',
    name: 'Sign_contract',
    component: () => import('../views/Index/Sign_contract.vue')
  },

  // 结果
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Index/Result.vue')
  },

  // 待处理签约申请
  {
    path: '/sign_up',
    name: 'Sign_up',
    component: () => import('../views/Index/Sign_up.vue')
  },
  // 待处理服务申请
  {
    path: '/pending_service',
    name: 'Pending_service',
    component: () => import('../views/Index/Pending_service.vue')
  },

  // day05 签约管理
  {
    path: '/05_contract_management',
    name: '05_Contract_management',
    component: () => import('../views/Index/05_Contract_management.vue')
  },

  //  day05 签约详情
  {
    path: '/05_sign_up_for_details',
    name: '05_Sign_up_for_details',
    component: () => import('../views/Index/05_Sign_up_for_details.vue')
  },

  
 
  // Sign up for details
]



const router = new VueRouter({
  routes
})

export default router
