import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import ProductPage from "@/pages/ProductPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  { 
    name: "Reciepe", 
    path: '/reciepe/:id', 
    component: ProductPage 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;