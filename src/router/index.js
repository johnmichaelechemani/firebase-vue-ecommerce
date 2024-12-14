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
      path: "/malls",
      name: "malls",
      component: () => import("../views/Malls.vue"),
    },
    {
      path: "/purchase",
      name: "purchase",
      component: () => import("../views/Purchase.vue"),
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
  ],
});

export default router;
