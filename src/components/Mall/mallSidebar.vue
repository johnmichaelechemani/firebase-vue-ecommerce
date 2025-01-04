<template>
  <aside
    class="w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"
  >
    <div class="m-2"></div>
    <div
      class="my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"
    >
      <div class="h-28 w-full relative">
        <img
          :src="userData.bgImage"
          alt=""
          class="w-full h-full object-cover object-center"
        />
        <h2
          class="text-xs truncate sm:text-lg font-bold absolute bottom-0 left-0 border backdrop-blur-2xl px-4 text-gray-800 capitalize"
        >
          {{ userData.userName }}
        </h2>
      </div>
      <p
        class="text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"
      >
        MENU
      </p>
      <RouterLink to="/seller">
        <div
          class="flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/seller' ? 'bg-gray-800 text-white' : '',
              'place-items-center p-1 border shadow',
            ]"
          >
            <Icon
              icon="material-symbols-light:home-outline"
              width="30"
              height="30"
            />
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">
            DASHBOARD
          </p>
        </div>
      </RouterLink>
      <RouterLink to="/products">
        <div
          class="flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/products' ? 'bg-gray-800 text-white' : '',
              'place-items-center p-1 border shadow ',
            ]"
          >
            <Icon
              icon="material-symbols-light:remove-shopping-cart-rounded"
              width="30"
              height="30"
            />
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">
            PRODUCTS
          </p>
        </div>
      </RouterLink>

      <RouterLink to="/orders">
        <div
          class="flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/orders' ? 'bg-gray-800 text-white ' : '',
              'place-items-center p-1 border shadow ',
            ]"
          >
            <Icon
              icon="material-symbols-light:orders-outline"
              width="30"
              height="30"
            />
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">
            ORDERS
          </p>
        </div>
      </RouterLink>
      <RouterLink to="/reports">
        <div
          class="flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/reports' ? 'bg-gray-800 text-white ' : '',
              'place-items-center p-1 border shadow ',
            ]"
          >
            <Icon
              icon="material-symbols-light:report-outline-rounded"
              width="30"
              height="30"
            />
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">
            REPORTS
          </p>
        </div>
      </RouterLink>
    </div>
  </aside>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { userData } from "@/store";
import router from "@/router";
</script>
