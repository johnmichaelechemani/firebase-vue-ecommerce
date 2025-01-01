<template>
  <div
    v-if="props.message"
    :class="`text-xs font-semibold mb-2 bg-${props.color}-500/5 text-${props.color}-500 p-2 border border-${props.color}-500/10`"
  >
    {{ props.message }}
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  message: String,
  color: String,
});
</script>
