import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../views/HomePage.vue");
const RegisterPage = () => import("../views/RegisterPage.vue");
const LoginPage = () => import("../views/LoginPage.vue");
const ProfilePage = () => import("../views/ProfilePage.vue");
const ApartmentPage = () => import("../views/ApartmentPage.vue");

import { authorizedGuard, unauthorizedGuard } from "./guards";

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
      beforeEnter: [unauthorizedGuard],
    },
    {
      name: "login",
      path: "/login",
      component: LoginPage,
      beforeEnter: [unauthorizedGuard],
    },
    {
      name: "profile",
      path: "/profile",
      component: ProfilePage,
      beforeEnter: [authorizedGuard],
    },
    {
      name: "apartment",
      path: "/apartments/:id",
      component: ApartmentPage,
    },
  ],
});

export default router;
