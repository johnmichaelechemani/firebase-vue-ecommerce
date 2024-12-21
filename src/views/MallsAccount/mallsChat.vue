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
  <div
    class="bg-gray-400/5 border shadow-xl overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)] p-2"
  >
    <div>Chats Page {{ mallId }}</div>
  </div>
</template>
