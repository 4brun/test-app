import UsersPage from "@/pages/UsersPage"
import PostsPage from "@/pages/PostsPage"
import CommentsPage from '@/pages/CommentsPage'
import { createRouter, createWebHistory } from "vue-router"

const routes = [
   {
      path: '/',
      component: UsersPage
   },
   {
      path: '/posts',
      component: PostsPage
   },
   {
      path: '/comments',
      component: CommentsPage
   }
]

const router = createRouter({
   routes,
   history: createWebHistory()
})

export default router