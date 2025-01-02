<template>
  <div
    v-if="props.message"
    class="text-xs font-semibold mb-2 p-2 border capitalize"
    :class="[textColor, borderColor, backgroundColor]"
  >
    {{ props.message }}
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  message: String,
  color: String,
});
const textColor = computed(() => {
  return (
    {
      green: "text-green-500",
      red: "text-red-500",
    }[props.color] || "text-gray-500"
  );
});

const borderColor = computed(() => {
  return (
    {
      green: "border-green-500/10",
      red: "border-red-500/10",
    }[props.color] || "border-gray-500/10"
  );
});

const backgroundColor = computed(() => {
  return (
    {
      green: "bg-green-500/5",
      red: "bg-red-500/5",
    }[props.color] || "bg-gray-500/5"
  );
});
</script>
