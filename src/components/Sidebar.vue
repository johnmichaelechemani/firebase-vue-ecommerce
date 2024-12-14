<template>
  <aside
    class="w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"
  >
    <div>
      <div class="w-full h-28 bg-gray-700/20"></div>
    </div>
    <div class="m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32">
      <p
        class="text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"
      >
        MENU
      </p>
      <RouterLink to="/">
        <div
          class="flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/' ? 'bg-gray-800 text-white' : '',
              'place-items-center p-1 border shadow',
            ]"
          >
            <Icon
              icon="material-symbols-light:home-outline"
              width="30"
              height="30"
            />
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">HOME</p>
        </div>
      </RouterLink>
      <RouterLink to="/malls">
        <div
          class="flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/malls' ? 'bg-gray-800 text-white' : '',
              'place-items-center p-1 border shadow ',
            ]"
          >
            <Icon
              icon="material-symbols-light:shopping-basket-outline"
              width="30"
              height="30"
            />
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">
            MALLS
          </p>
        </div>
      </RouterLink>

      <RouterLink to="/purchase">
        <div
          class="flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"
        >
          <div
            :class="[
              $route.path === '/purchase' ? 'bg-gray-800 text-white' : '',
              'place-items-center p-1 border shadow ',
            ]"
          >
            <Icon
              icon="material-symbols-light:credit-card-outline"
              width="30"
              height="30"
            />
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">
            PURCHASE
          </p>
        </div>
      </RouterLink>
    </div>
  </aside>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import router from "@/router";
</script>
