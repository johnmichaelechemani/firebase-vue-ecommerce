<script setup>
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="w-screen h-screen flex justify-center items-center text-lg font-semibold"
  >
    <div>
      <div class="">Hey! I can't find what you're looking.</div>
      <RouterLink to="/" class="flex items-center gap-2 text-sm my-5">
        <div class="border p-2 shadow">
          <Icon
            icon="material-symbols-light:arrow-back"
            width="30"
            height="30"
          />
        </div>
        Go Back Human
      </RouterLink>
    </div>
  </div>
</template>
