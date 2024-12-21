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
    class="bg-gray-400/5 border relative shadow-xl overflow-y-scroll no-scrollbar"
  >
    <div>
      <div class="flex gap-2 justify-start items-center shadow-sm p-2 border-b">
        <div
          class="flex justify-between bg-gray-700/20 size-8 items-center"
        ></div>
        <div><p class="text-sm font-semibold">Store ni Michael</p></div>
      </div>
      <div class="h-[calc(100vh-10rem)] mx-2 p-2">Main Layout</div>
      <div class="absolute bottom-0  mx-2 left-0 w-full bg-red-500">input layout</div>
    </div>
  </div>
</template>
