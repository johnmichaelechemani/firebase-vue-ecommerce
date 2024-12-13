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

<style scoped></style>
