<script setup>
import { Icon } from "@iconify/vue";
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="p-2">
      <p class="text-sm font-semibold">My Purchase</p>
      <div class="mt-4 flex justify-start items-center gap-8">
        <RouterLink to="/purchase/to-pay">
          <div class="place-items-center">
            <div
              :class="[
                $route.name === 'pay'
                  ? 'bg-gray-800 w-10 text-white'
                  : 'border',
                'p-2',
              ]"
            >
              <Icon
                icon="material-symbols-light:credit-card-outline"
                width="24"
                height="24"
              />
            </div>
            <p class="text-sm my-2 text-center font-semibold">To Pay</p>
          </div>
        </RouterLink>
        <RouterLink to="/purchase/to-ship">
          <div class="place-items-center">
            <div
              :class="[
                $route.name === 'ship'
                  ? 'bg-gray-800 w-10 text-white'
                  : 'border',
                'p-2',
              ]"
            >
              <Icon icon="mdi:ship-wheel" width="24" height="24" />
            </div>
            <p class="text-sm my-2 text-center font-semibold">To Ship</p>
          </div>
        </RouterLink>
        <RouterLink to="/purchase/to-recieve">
          <div class="place-items-center">
            <div  :class="[
                $route.name === 'recieve'
                  ? 'bg-gray-800 w-10 text-white'
                  : 'border',
                'p-2',
              ]">
              <Icon icon="mdi:target-account" width="24" height="24" />
            </div>
            <p class="text-sm my-2 text-center font-semibold">To Recieve</p>
          </div>
        </RouterLink>
        <RouterLink to="/purchase/to-rate">
          <div class="place-items-center">
            <div  :class="[
                $route.name === 'rate'
                  ? 'bg-gray-800 w-10 text-white'
                  : 'border',
                'p-2',
              ]">
              <Icon icon="mdi:star-outline" width="24" height="24" />
            </div>
            <p class="text-sm my-2 text-center font-semibold">To Rate</p>
          </div>
        </RouterLink>
      </div>
    </div>

    <div class="mx-2">
      <RouterView />
    </div>
  </div>
</template>
