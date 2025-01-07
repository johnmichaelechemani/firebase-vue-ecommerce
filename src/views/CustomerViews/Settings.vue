<script setup>
import { Icon } from "@iconify/vue";
import { userData } from "../../store.js";
import { defineProps } from "vue";
const props = defineProps({
  showPanel: Function,
  logout: Function,
});
</script>

<template>
  <aside
    class="w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"
  >
    <button @click="props.showPanel(null)">
      <Icon
        icon="material-symbols-light:close-small-outline"
        width="24"
        height="24"
      />
    </button>
    <div class="mx-2 mb-2">
      <div
        class="shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"
      >
        <div class="size-10 rounded-full">
          <img
            :src="userData.userPhotoURL"
            alt=""
            class="object-center w-full h-full rounded-full object-cover"
          />
        </div>
        <h1 class="text-sm font-semibold">{{ userData.userName }}</h1>
      </div>
      <p class="text-xs font-semibold text-gray-500">My Account</p>
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
      <RouterLink to="/address">
        <button
          class="flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"
        >
          <div class="border p-1 shadow place-items-center">
            <Icon
              icon="material-symbols-light:location-on-outline"
              width="24"
              height="24"
            />
          </div>
          <p class="text-sm font-semibold text-gray-700">Addresses</p>
        </button>
      </RouterLink>
      <p class="text-xs font-semibold text-gray-500">Support</p>
      <button
        class="flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"
      >
        <div class="border p-1 shadow place-items-center">
          <Icon
            icon="material-symbols-light:help-outline"
            width="24"
            height="24"
          />
        </div>
        <p class="text-sm font-semibold text-gray-700">Help Centre</p>
      </button>
      <button
        class="flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"
      >
        <div class="border p-1 shadow place-items-center">
          <Icon
            icon="material-symbols-light:info-outline"
            width="24"
            height="24"
          />
        </div>
        <p class="text-sm font-semibold text-gray-700">About</p>
      </button>
      <button
        class="flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"
      >
        <div class="border p-1 shadow place-items-center">
          <Icon
            icon="fluent:people-community-32-light"
            width="24"
            height="24"
          />
        </div>
        <p class="text-sm font-semibold text-gray-700">Community Rules</p>
      </button>
      <button
        @click="props.logout"
        class="border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"
      >
        Logout
      </button>
    </div>
  </aside>
</template>
