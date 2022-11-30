import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import pollView from "../views/pollView.vue"
import newsView from '../views/NewsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: "/polltest",
    name: "poll",
    component: pollView
  },{
    path: '/news',
    name: 'news',
    component: newsView
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
