<template>
  <aside class=" w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </aside>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
