import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    name:"Home",
    path:"/",
    component:()=>import("../pages/Home.vue")
  },
  {
    name:"Categories",
    path:"/categories",
    component:()=>import("../pages/Categories.vue"),
    meta: { requiresAuth: true ,title:"Categories"}
  },
  {
    name:"Transactions",
    path:"/transactions",
    component:() =>import("../pages/Transactions.vue"),
    meta: { requiresAuth: true ,title:"Transactions"}
  },
  {
    name:"Profil",
    path:"/profil",
    component:()=>import("../pages/Profil.vue"),
    meta: { requiresAuth: true ,title:"Profile"}

  },
  {
    name:"Signup",
    path:"/auth/signup",
    component:()=>import("../pages/Auth/SignUp.vue")
  },
  {
    name:"Login",
    path:"/auth/login",
    component:()=>import("../pages/Auth/Login.vue")
  },
],
})

export default router
