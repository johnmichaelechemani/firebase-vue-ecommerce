<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="p-2">
      <p class="text-sm font-semibold">My Purchase</p>
      <div class="my-4 flex flex-wrap items-center gap-4">
        <div>
          <div class="p-2 bg-gray-800 text-white">
            <Icon
              icon="material-symbols-light:credit-card-outline"
              width="24"
              height="24"
            />
          </div>
          <p class="text-sm font-medium">To Pay</p>
        </div>

        <div>
          <div class="p-2 bg-gray-800 text-white">
            <Icon
              icon="material-symbols-light:credit-card-outline"
              width="24"
              height="24"
            />
          </div>
          <p class="text-sm font-medium">To Ship</p>
        </div>
        <div>
          <div class="p-2 bg-gray-800 text-white">
            <Icon
              icon="material-symbols-light:credit-card-outline"
              width="24"
              height="24"
            />
          </div>
          <p class="text-sm font-medium">To Recieve</p>
        </div>
        <div>
          <div class="p-2 bg-gray-800 text-white">
            <Icon
              icon="material-symbols-light:credit-card-outline"
              width="24"
              height="24"
            />
          </div>
          <p class="text-sm font-medium">To Rate</p>
        </div>
      </div>
    </div>
  </div>
</template>
