<script setup>
import { Icon } from "@iconify/vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="p-2">
      <p class="text-sm font-semibold">My Purchase</p>
      <div class="my-4 flex justify-start items-center gap-8">
        <div class="place-items-center">
          <div class="p-2 bg-gray-800 w-10 text-white">
            <Icon
              icon="material-symbols-light:credit-card-outline"
              width="24"
              height="24"
            />
          </div>
          <p class="text-sm my-2 font-semibold">To Pay</p>
        </div>

        <div class="place-items-center">
          <div class="p-2 border flex w-10 justify-center items-center">
            <Icon icon="mdi:ship-wheel" width="24" height="24" />
          </div>
          <p class="text-sm my-2 font-semibold">To Ship</p>
        </div>
        <div class="place-items-center">
          <div class="p-2 border flex w-10 justify-center items-center">
            <Icon icon="mdi:target-account" width="24" height="24" />
          </div>
          <p class="text-sm my-2 font-semibold">To Recieve</p>
        </div>
        <div class="place-items-center">
          <div class="p-2 border flex w-10 justify-center items-center">
            <Icon icon="mdi:star-outline" width="24" height="24" />
          </div>
          <p class="text-sm my-2 font-semibold">To Rate</p>
        </div>
      </div>
    </div>


    <RouterView />
  </div>
</template>
