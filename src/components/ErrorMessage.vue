<template>
  <div
    v-if="props.errMessage"
    class="text-xs font-semibold mb-2 text-red-500 p-2 border border-red-500/10"
  >
    {{ props.errMessage }}
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  errMessage: String,
});
</script>
