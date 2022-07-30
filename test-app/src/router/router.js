import Users from '@/components/Users'
import Posts from '@/components/Posts'
import Comments from '@/components/Comments'
import { createRouter, createWebHistory } from "vue-router"

const routes = [
   {
      path: '/',
      component: Users
   },
   {
      path: '/posts',
      component: Posts
   },
   {
      path: '/comments',
      component: Comments
   }
]

const router = createRouter({
   routes,
   history: createWebHistory()
})

export default router