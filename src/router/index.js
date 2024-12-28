import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/CustomerViews/HomeView.vue";
import CustomerLayout from "../layouts/customerLayout.vue";
import SellerLayout from "../layouts/sellerLayout.vue";
import { isLoggedIn, userData } from "@/store";
import { loginErrorMessage } from "@/store";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: CustomerLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },

        {
          path: "/login",
          name: "login",
          component: () => import("../views/CustomerViews/Login.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () => import("../views/CustomerViews/Register.vue"),
        },
        {
          path: "/malls",
          name: "malls",
          component: () => import("../views/CustomerViews/Malls.vue"),
          children: [
            {
              path: "",
              name: "mallsHome",
              component: () =>
                import("../views/CustomerViews/MallsAccount/mallsHome.vue"),
            },
            {
              path: ":id",
              name: "mallStore",
              component: () =>
                import("../views/CustomerViews/MallsAccount/mallsAccount.vue"),
            },
          ],
        },
        {
          path: "/purchase",
          name: "purchase",
          component: () => import("../views/CustomerViews/Purchase.vue"),
        },
        {
          path: "/chats",
          name: "chats",
          component: () => import("../views/CustomerViews/Chats.vue"),
          children: [
            {
              path: ":id",
              name: "mallsChat",
              component: () =>
                import("../views/CustomerViews/MallsAccount/mallsChat.vue"),
            },
          ],
        },
        {
          path: "/notifications",
          name: "notifications",
          component: () => import("../views/CustomerViews/Notifications.vue"),
        },
      ],
    },
    {
      path: "/seller",
      name: "seller",
      component: SellerLayout,
      children: [
        {
          path: "",
          name: "mallDashboard",
          component: () => import("../views/MallsViews/mallDashboard.vue"),
        },
        {
          path: "/profile",
          name: "mallProfile",
          component: () => import("../views/MallsViews/mallProfile.vue"),
        },
        {
          path: "/orders",
          name: "mallOrders",
          component: () => import("../views/MallsViews/mallOrders.vue"),
        },
        {
          path: "/products",
          name: "mallProducts",
          component: () => import("../views/MallsViews/mallProducts.vue"),
        },
        {
          path: "/reports",
          name: "mallReports",
          component: () => import("../views/MallsViews/mallReports.vue"),
        },
      ],
    },

    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  //console.log(userData.value,  isLoggedIn.value);
  if (to.name === "purchase") {
    // More robust login verification
    if (!isLoggedIn.value && !userData.value) {
      console.warn("Redirecting to login - not authenticated");
      loginErrorMessage.value = "Please login first!";
      next("/login");
      return;
    }
  }
  if (to.name === "mallDashboard") {
    // More robust login verification
    if (!isLoggedIn.value && !userData.value) {
      console.warn("Redirecting to login - not authenticated");
      loginErrorMessage.value = "Please login first!";
      next("/login");
      return;
    }

    // Case-insensitive role check
    const userRole = userData.value.role?.toLowerCase();
    if (userRole !== "seller") {
      console.warn("Unauthorized access - not a seller");
      next("/"); // Redirect to home if not a seller
      return;
    }
  }

  next();
});

export default router;
