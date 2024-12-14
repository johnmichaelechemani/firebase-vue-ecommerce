<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <p class="text-xs font-semibold text-gray-500">My Account</p>
  <button class="flex justify-center items-center gap-2 my-2">
    <div class="border p-1 shadow place-items-center">
      <Icon icon="material-symbols-light:edit-outline" width="24" height="24" />
    </div>
    <p class="text-sm font-semibold text-gray-700">Account</p>
  </button>
  <button class="flex justify-center items-center gap-2 my-2">
    <div class="border p-1 shadow place-items-center">
      <Icon
        icon="material-symbols-light:location-on-outline"
        width="24"
        height="24"
      />
    </div>
    <p class="text-sm font-semibold text-gray-700">Addresses</p>
  </button>
  <p class="text-xs font-semibold text-gray-500">Support</p>
  <button class="flex justify-center items-center gap-2 my-2">
    <div class="border p-1 shadow place-items-center">
      <Icon icon="material-symbols-light:help-outline" width="24" height="24" />
    </div>
    <p class="text-sm font-semibold text-gray-700">Help Centre</p>
  </button>
  <button class="flex justify-center items-center gap-2 my-2">
    <div class="border p-1 shadow place-items-center">
      <Icon icon="material-symbols-light:info-outline" width="24" height="24" />
    </div>
    <p class="text-sm font-semibold text-gray-700">About</p>
  </button>
  <button class="flex justify-center items-center gap-2 my-2">
    <div class="border p-1 shadow place-items-center">
      <Icon icon="fluent:people-community-32-light" width="24" height="24" />
    </div>
    <p class="text-sm font-semibold text-gray-700">Community Rules</p>
  </button>
</template>
