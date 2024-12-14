import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/malls",
      name: "malls",
      component: () => import("../views/Malls.vue"),
    },
    {
      path: "/purchase",
      name: "purchase",
      component: () => import("../views/Purchase.vue"),
      children: [
        {
          path: "to-ship",
          name: "ship",
          component: () => import("../views/Purchase/ToShip.vue"),
        },
        {
          path: "to-pay",
          name: "pay",
          component: () => import("../views/Purchase/ToPay.vue"),
        },
        {
          path: "to-recieve",
          name: "recieve",
          component: () => import("../views/Purchase/ToRecieve.vue"),
        },
        {
          path: "to-rate",
          name: "rate",
          component: () => import("../views/Purchase/ToRate.vue"),
        },
      ],
    },
    {
      path: "/chats",
      name: "chats",
      component: () => import("../views/Chats.vue"),
    },
    {
      path: "/notifications",
      name: "notifications",
      component: () => import("../views/Notifications.vue"),
    },

    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
