<template>
  <div>
    <div class="fixed inset-0 z-50 bg-gray-800/30 backdrop-blur">
      <div class="relative flex justify-center items-center">
        <div
          class="border border-gray-700/50 bg-gray-100 py-1.5 px-1 ml-2 my-5 text-sm w-96 flex"
        >
          <div class="px-1 flex justify-center items-center">
            <Icon icon="material-symbols-light:search" width="24" height="24" />
          </div>
          <input
            type="text"
            class="w-full outline-none bg-transparent py-1 placeholder:text-sm placeholder:text-gray-700"
            placeholder="Search.."
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
