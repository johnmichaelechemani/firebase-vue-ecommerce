<script setup>
import User from "../assets/dummyImages/user.jpg";
import { Icon } from "@iconify/vue";
</script>
<template>
  <nav
    class="ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-14"
  >
    <div class="relative flex justify-between items-center">
      <div class="ml-2 hidden sm:flex">
        <h1 class="font-semibold text-lg">Jm's Shops</h1>
      </div>
      <div
        class="border ml-2 border-gray-700/50 py-1.5 px-1 text-sm w-full sm:w-1/3 flex"
      >
        <div class="px-1">
          <Icon icon="material-symbols-light:search" width="20" height="20" />
        </div>
        <input
          type="text"
          class="w-full outline-none placeholder:text-sm placeholder:text-gray-700"
          placeholder="Search.."
        />
      </div>
      <div class="flex justify-end items-center gap-1 m-2">
        <button class="p-2 rounded-full hover:bg-gray-700/20">
          <Icon
            icon="material-symbols-light:notification-important-outline-sharp"
            width="24"
            height="24"
          />
        </button>
        <button class="p-2 rounded-full hover:bg-gray-700/20">
          <Icon
            icon="material-symbols-light:favorite-outline"
            width="24"
            height="24"
          />
        </button>
        <button class="p-2 rounded-full hover:bg-gray-700/20">
          <Icon icon="mdi-light:cart" width="24" height="24" />
        </button>
        <div class="size-10 rounded-full bg-gray-800">
          <img
            :src="User"
            alt=""
            class="h-full w-full object-cover rounded-full object-center"
          />
        </div>
      </div>
    </div>
  </nav>
</template>
