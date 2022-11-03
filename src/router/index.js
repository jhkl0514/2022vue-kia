import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ApplyView from '@/views/ApplyView.vue'
import LifeView from '@/views/LifeView.vue'
import StoryView from '@/views/StoryView.vue'
import JobView from '@/views/JobView.vue'
import FaqView from '@/views/FaqView.vue'
import BlogView from '@/views/BlogView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/apply',
    name: 'apply',
    component: ApplyView
  },
  {
    path: '/life',
    name: 'life',
    component: LifeView 
  },
  {
    path: '/story',
    name: 'story',
    component: StoryView
  },
  {
    path: '/job',
    name: 'job',
    component: JobView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  // {
  //   path: '/comm',
  //   name: 'comm',
  //   component: CommView,
  //   children:[
  //     {
  //       path:'list',
  //       name:'CommList',
  //       component:CommListView,
  //     }
  //   ]
  // },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
