<script setup>
import { RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <Sidebar />

  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap");
:root {
  font-family: "Manrope", serif;
  font-optical-sizing: auto;
  color: #0d0c16;
}
</style>
