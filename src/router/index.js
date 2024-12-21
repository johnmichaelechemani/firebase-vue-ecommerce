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
      children: [
        {
          path: "",
          name: "mallsHome",
          component: () => import("../views/MallsAccount/mallsHome.vue"),
        },
        {
          path: ":id",
          name: "mallStore",
          component: () => import("../views/MallsAccount/mallsAccount.vue"),
        },
      ],
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
      children: [
        {
          path: ":id",
          name: "mallsChat",
          component: () => import("../views/MallsAccount/mallsChat.vue"),
        },
      ],
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
