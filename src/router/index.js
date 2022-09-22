import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../views/HomePage.vue");
const RegisterPage = () => import("../views/RegisterPage.vue");
const LoginPage = () => import("../views/LoginPage.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: HomePage,
    },
    {
      name: "register",
      path: "/register",
      component: RegisterPage,
    },
    {
      name: "login",
      path: "/login",
      component: LoginPage,
    },
  ],
});

export default router;
