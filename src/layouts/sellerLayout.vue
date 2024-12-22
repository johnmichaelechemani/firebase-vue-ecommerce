<script setup>
import { RouterView } from "vue-router";
import Sidebar from "@/components/Mall/Sidebar.vue";
import Header from "@/components/Mall/mallHeader.vue";
</script>

<template>
  <Header />
  <Sidebar />

  <RouterView />
</template>
