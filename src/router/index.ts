import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    name:"Home",
    path:"/",
    component:()=>import("../pages/Home.vue")
  },
  {
    name:"Profil",
    path:"/profil",
    component:()=>import("../pages/Home.vue")
  },
  {
    name:"Signup",
    path:"/auth/signup",
    component:()=>import("../pages/Home.vue")
  },
  {
    name:"Login",
    path:"/auth/login",
    component:()=>import("../pages/Home.vue")
  },
],
})

export default router
