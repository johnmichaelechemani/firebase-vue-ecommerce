<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const mallId = ref(Number(route.params.id));

watch(
  () => route.params.id,
  (newId) => {
    mallId.value = Number(newId);
  }
);
</script>

<template>
  <div>Chats Page {{ mallId }}</div>
</template>
