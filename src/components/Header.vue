<script setup>
import User from "../assets/dummyImages/user.jpg";
</script>
<template>
  <nav
    class="ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-14"
  >
    <div class="relative flex justify-between items-center">
      <div class="ml-2">
        <h1 class="font-semibold text-lg">Jm's Shops</h1>
      </div>
      <div class="border border-gray-700/50 py-1.5 px-2 text-sm w-1/3">
        <input
          type="search"
          class="w-full outline-none placeholder:text-sm placeholder:text-gray-700"
          placeholder="Search.."
        />
      </div>
      <div class="flex justify-end items-center gap-2 m-2">
        <div class="size-8 rounded-full bg-gray-500"></div>
        <div class="size-8 rounded-full bg-gray-500"></div>
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
