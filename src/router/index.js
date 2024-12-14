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
  ],
});

export default router;
