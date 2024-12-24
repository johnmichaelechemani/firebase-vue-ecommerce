<script setup>
import { Icon } from "@iconify/vue";
import { userData } from "../../store.js";
</script>

<template>
  <div
    class="shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"
  >
    <div
      class="size-10 rounded-full border border-gray-700 flex justify-center items-center"
    >
      <img
        v-if="userData.userPhotoURL"
        :src="userData.userPhotoURL"
        alt=""
        class="object-center w-full h-full rounded-full object-cover"
      />
      <div v-else class="flex justify-center items-center">
        <Icon icon="material-symbols-light:store" width="30" height="30" />
      </div>
    </div>
    <h1 class="text-sm font-semibold">{{ userData.userName }}</h1>
  </div>
  <p class="text-xs font-semibold text-gray-500">My Account</p>
  <RouterLink to="/profile">
    <button
      class="flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"
    >
      <div class="border p-1 shadow place-items-center">
        <Icon
          icon="material-symbols-light:edit-outline"
          width="24"
          height="24"
        />
      </div>
      <p class="text-sm font-semibold text-gray-700">Account</p>
    </button>
  </RouterLink>

  <p class="text-xs font-semibold text-gray-500">Support</p>
  <button
    class="flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"
  >
    <div class="border p-1 shadow place-items-center">
      <Icon icon="material-symbols-light:help-outline" width="24" height="24" />
    </div>
    <p class="text-sm font-semibold text-gray-700">Help Centre</p>
  </button>
  <button
    class="flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"
  >
    <div class="border p-1 shadow place-items-center">
      <Icon icon="material-symbols-light:info-outline" width="24" height="24" />
    </div>
    <p class="text-sm font-semibold text-gray-700">About</p>
  </button>
  <button
    class="flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"
  >
    <div class="border p-1 shadow place-items-center">
      <Icon icon="fluent:people-community-32-light" width="24" height="24" />
    </div>
    <p class="text-sm font-semibold text-gray-700">Community Rules</p>
  </button>
</template>
