<script setup>
import { RouterView } from "vue-router";
import Sidebar from "@/components/Admin/adminSidebar.vue";
import Header from "@/components/Admin/adminHeader.vue";
</script>

<template>
  <Header />
  <Sidebar />

  <RouterView />
</template>
