<template>
  <aside
    class="w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"
  >
    <div>
      <div class="w-full h-28 bg-gray-700/20"></div>
    </div>
    <div class="m-2 overflow-y-scroll h-[calc(100vh-0rem)] pb-32">
      <p class="text-xs font-semibold text-gray-500 text-center sm:text-start">
        MENU
      </p>
      <RouterLink to="/">
        <div
          class="flex sm:justify-start my-2 justify-center items-center gap-1"
        >
          <div class="place-items-center p-1 border shadow">
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
        <div class="flex sm:justify-start justify-center items-center gap-1">
          <div class="place-items-center p-1 border shadow">
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
      <p
        class="text-xs font-semibold my-2 text-gray-500 text-center sm:text-start"
      >
        MY PURCHASE
      </p>
      <RouterLink to="/purchase">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <div>
            <div class="p-1 border place-items-center">
              <Icon
                icon="material-symbols-light:payments-outline-sharp"
                width="24"
                height="24"
              />
            </div>
            <p class="text-xs py-1 text-center">To pay</p>
          </div>
          <div>
            <div class="p-1 border place-items-center">
              <Icon
                icon="material-symbols-light:payments-outline-sharp"
                width="24"
                height="24"
              />
            </div>
            <p class="text-xs py-1 text-center">To ship</p>
          </div>
          <div>
            <div class="p-1 border place-items-center">
              <Icon
                icon="material-symbols-light:payments-outline-sharp"
                width="24"
                height="24"
              />
            </div>
            <p class="text-xs py-1 text-center">To recieve</p>
          </div>
          <div>
            <div class="p-1 border place-items-center">
              <Icon
                icon="material-symbols-light:payments-outline-sharp"
                width="24"
                height="24"
              />
            </div>
            <p class="text-xs py-1 text-center">To rate</p>
          </div>
        </div>
      </RouterLink>
    </div>
  </aside>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
</script>
