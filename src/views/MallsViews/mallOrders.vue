<script setup>
import { ref } from "vue";

const status = ref([
  {
    name: "All",
  },
  {
    name: "Pending",
  },
  {
    name: "Processing",
  },
  {
    name: "Shipped",
  },
  {
    name: "Delivered",
  },
  {
    name: "Cancelled",
  },
  {
    name: "Refunded",
  },
  {
    name: "Returned",
  },
  {
    name: "Completed",
  },
]);

const selectedStatus = ref("All");
const selected = (name) => {
  selectedStatus.value = name;
  console.log(name);
};
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div
      class="m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)] pb-32"
    >
      <p class="text-sm font-semibold py-2">Order Management</p>
      <div class="mb-2 border w-full overflow-x-scroll no-scrollbar p-2">
        <div class="flex gap-3">
          <button
            @click="selected(i.name)"
            v-for="i in status"
            :class="
              selectedStatus === i.name
                ? 'text-gray-900 border border-b-2 border-b-gray-800 shadow-sm py-1 px-2'
                : 'text-gray-500'
            "
            class="text-sm font-medium"
          >
            {{ i.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
