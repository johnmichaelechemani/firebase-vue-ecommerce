<script setup>
import { ref, onMounted, computed } from "vue";
import {
  getMallOrderProducts,
  mallOrderProducts,
  getRiders,
  riders,
} from "@/scripts/firebaseGetApi";
import { Time, clearAlert } from "@/scripts/composables";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import AlertMessage from "@/components/AlertMessage.vue";

const db = getFirestore();
const message = ref({ message: "", color: "" });

const status = ref([
  {
    name: "Pending",
  },
  {
    name: "Processing",
  },
  {
    name: "Shipping",
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

const updateData = async (doc, newData, dataToUpdate) => {
  await updateDoc(doc, {
    [dataToUpdate]: newData,
  });
};

const updateStatus = async (item, newStatus, userId) => {
  try {
    const orderRef = doc(db, "purchase", userId, "purchaseItems", item.id);
    updateData(orderRef, newStatus, "status");
    message.value = {
      color: "green",
      message: "Status updated successfully",
    };
    clearAlert(message);
  } catch (error) {
    message.value = {
      color: "red",
      message: `Error updating status: ${error}`,
    };
    clearAlert(message);
  }
};

onMounted(() => {
  getMallOrderProducts();
  getRiders();
});
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="absolute top-2 right-2">
      <AlertMessage
        v-if="message.message"
        :message="message.message"
        :color="message.color"
      />
    </div>

    <div
      class="m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)] pb-32"
    >
      <p class="text-sm font-semibold py-2">Order Management</p>
      <div class="mb-2 border w-full overflow-x-scroll no-scrollbar p-2">
        <div class="flex gap-3">
          <button
            @click="selected('All')"
            :class="
              selectedStatus === 'All'
                ? 'text-gray-900 border border-b-2 border-b-gray-800 shadow-sm py-1 px-2'
                : 'text-gray-500'
            "
            class="text-sm font-medium"
          >
            All
          </button>
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
        <div class="relative overflow-x-auto no-scrollbar shadow-sm w-full">
          <table class="w-full text-sm text-left rtl:text-right">
            <thead class="text-xs text-white uppercase bg-gray-800">
              <tr>
                <th scope="col" class="px-4 py-3">Product name</th>
                <th scope="col" class="px-4 py-3">User Name</th>
                <th scope="col" class="px-4 py-3">User Number</th>
                <th scope="col" class="px-4 py-3">Total Price</th>
                <th scope="col" class="px-4 py-3">Status</th>
                <th scope="col" class="px-4 py-3">Date</th>
                <th scope="col" class="px-4 py-3">Shipment Tracking</th>
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
                  class="px-4 py-4 truncate max-w-32"
                  :title="item.address.name"
                >
                  {{ item.address.name }}
                </td>
                <td class="px-4 py-4">
                  {{ item.address.phone }}
                </td>
                <td class="px-4 py-4">{{ item.totalPrice }}</td>
                <td class="px-4 py-4 uppercase flex gap-1">
                  <select
                    v-model="item.status"
                    @change="updateStatus(item, item.status, item.userId)"
                    class="border p-1 rounded font-semibold text-sm w-full"
                  >
                    <option
                      v-for="i in status"
                      :key="i"
                      :value="i.name.toLowerCase()"
                      :selected="i.name.toLowerCase() === item.status"
                    >
                      {{ i.name }}
                    </option>
                  </select>

                  <select
                    v-if="item.status === 'processing'"
                    class="border p-1 rounded font-semibold text-sm w-52"
                  >
                    <option selected hidden>Select A Rider</option>
                    <option
                      v-for="i in riders"
                      :key="i"
                      class="text-green-500 font-semibold"
                    >
                      {{ i.userName }}
                    </option>
                  </select>
                </td>
                <td
                  class="px-4 py-4 max-w-32 truncate"
                  :title="Time(item.purchaseDate)"
                >
                  {{ Time(item.purchaseDate) }}
                </td>
                <td class="px-4 py-4 max-w-52">Visayas</td>
              </tr>
            </tbody>
            <tbody v-if="!filteredOrders.length" class="">
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
