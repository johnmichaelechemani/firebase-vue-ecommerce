import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/CustomerViews/HomeView.vue";
import CustomerLayout from "../layouts/customerLayout.vue";
import SellerLayout from "../layouts/sellerLayout.vue";
import { isLoggedIn, userData, loginErrorMessage } from "@/store";
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
        {
          path: "/address",
          name: "address",
          component: () =>
            import(
              "../views/CustomerViews/CustomerAccount/CustomerAddress.vue"
            ),
        },
        {
          path: "/community",
          name: "community",
          component: () =>
            import("../views/CustomerViews/Support/communityRules.vue"),
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
      path: "/admin",
      name: "admin",
      component: () => import("../layouts/adminLayout.vue"),
      children: [
        {
          path: "",
          name: "/adminDashboard",
          component: () => import("../views/AdminViews/Dashboard.vue"),
        },
        {
          path: "/userManagement",
          name: "userManagement",
          component: () => import("../views/AdminViews/userManagement.vue"),
        },
        {
          path: "/productManagement",
          name: "productManagement",
          component: () => import("../views/AdminViews/productManagement.vue"),
        },
        {
          path: "/orderManagement",
          name: "orderManagement",
          component: () => import("../views/AdminViews/orderManagement.vue"),
        },
        {
          path: "/paymentManagement",
          name: "paymentManagement",
          component: () => import("../views/AdminViews/paymentManagement.vue"),
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
      setTimeout(() => {
        loginErrorMessage.value = "";
      }, 2000);

      next("/login");
      return;
    }
  }
  if (to.name === "mallDashboard") {
    // More robust login verification
    if (!isLoggedIn.value && !userData.value) {
      console.warn("Redirecting to login - not authenticated");
      loginErrorMessage.value = "Please login first!";
      setTimeout(() => {
        loginErrorMessage.value = "";
      }, 2000);

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

  if (to.path.startsWith("/admin")) {
    if (!userData.value || !userData.value.role) {
      console.warn("Redirecting to login - not authenticated");
      loginErrorMessage.value = "Please login first!";
      setTimeout(() => {
        loginErrorMessage.value = "";
      }, 2000);
      next("/login");
      return;
    }

    const userRole = userData.value.role?.toLowerCase();
    if (userRole !== "admin") {
      console.warn("Unauthorized access - not an admin");
      next("/");
      return;
    }
  }

  next();
});

export default router;
