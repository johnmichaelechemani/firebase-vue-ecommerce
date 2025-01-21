<script setup>
import { ref, onMounted, computed } from "vue";
import {
  getMallOrderProducts,
  mallOrderProducts,
} from "@/scripts/firebaseGetApi";
import { Time } from "@/scripts/composables";
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

const filteredOrders = computed(() => {
  if (selectedStatus.value === "All") {
    return mallOrderProducts.value;
  }
  return mallOrderProducts.value.filter(
    (order) => order.status === selectedStatus.value.toLowerCase()
  );
});

onMounted(() => {
  getMallOrderProducts();
});
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
      <div class="flex flex-wrap gap-2 w-full">
        <div class="relative overflow-x-auto shadow-sm w-full">
          <table class="w-full text-sm text-left rtl:text-right">
            <thead class="text-xs text-white uppercase bg-gray-800">
              <tr>
                <th scope="col" class="px-4 py-3">Product name</th>
                <th scope="col" class="px-4 py-3">User Name</th>
                <th scope="col" class="px-4 py-3">User Number</th>
                <th scope="col" class="px-4 py-3">Total Price</th>
                <th scope="col" class="px-4 py-3">Status</th>
                <th scope="col" class="px-4 py-3">Date</th>
                <th scope="col" class="px-4 py-3">Shippment Tracking</th>
              </tr>
            </thead>

            <tbody v-for="item in filteredOrders" :key="item.id">
              <tr class="border-b">
                <th
                  scope="row"
                  :title="item.name"
                  class="px-4 py-4 uppercase truncate max-w-52 font-medium whitespace-nowrap"
                >
                  {{ item.name }}
                </th>
                <td
                  class="px-4 py-4 truncate max-w-52"
                  :title="item.address.name"
                >
                  {{ item.address.name }}
                </td>
                <td class="px-4 py-4">
                  {{ item.address.phone }}
                </td>
                <td class="px-4 py-4">{{ item.totalPrice }}</td>
                <td class="px-4 py-4 uppercase max-w-52">
                  {{ item.status }}
                </td>
                <td class="px-4 py-4 max-w-52">
                  {{ Time(item.purchaseDate) }}
                </td>
                <td class="px-4 py-4 max-w-52">Visayas</td>
              </tr>
            </tbody>
            <tbody v-if="mallOrderProducts.length === 0" class="">
              <div class="p-2 text-sm font-semibold text-gray-500">
                No Orders
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
