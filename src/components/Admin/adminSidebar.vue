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
          class="text-xs bg-gray-200 truncate sm:text-sm border-gray-800/50 rounded-sm font-bold absolute bottom-2 left-2 border backdrop-blur-2xl px-4 py-1 text-gray-800 capitalize"
        >
          {{ userData.userName }}
        </h2>
      </div>
      <p
        class="text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"
      >
        MENU
      </p>
      <RouterLink to="admin">
        <div
          class="flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/admin' ? 'bg-gray-800 text-white' : '',
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
      <RouterLink to="productManagement">
        <div
          class="flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/productManagement'
                ? 'bg-gray-800 text-white'
                : '',
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
            PRODUCT MANAGEMENT
          </p>
        </div>
      </RouterLink>
      <RouterLink to="userManagement">
        <div
          class="flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/userManagement' ? 'bg-gray-800 text-white' : '',
              'place-items-center p-1 border shadow ',
            ]"
          >
            <Icon icon="mynaui:user" width="30" height="30" />
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">
            USER MANAGEMENT
          </p>
        </div>
      </RouterLink>

      <RouterLink to="orderManagement">
        <div
          class="flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/orderManagement'
                ? 'bg-gray-800 text-white '
                : '',
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
            ORDERS MANAGEMENT
          </p>
        </div>
      </RouterLink>
      <RouterLink to="paymentManagement">
        <div
          class="flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/paymentManagement'
                ? 'bg-gray-800 text-white '
                : '',
              'place-items-center p-1 border shadow ',
            ]"
          >
            <Icon icon="fluent:payment-20-regular" width="30" height="30" />
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">
            PAYMENT & REVENUE MANAGEMENT
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
</script>
