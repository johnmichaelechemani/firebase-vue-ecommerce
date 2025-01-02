<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div
      class="p-2 relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32 w-full"
    >
      <p class="text-sm font-semibold capitalize border-b pb-2">My Addresses</p>
      <div>
        <p class="text-sm font-semibold py-1 px-2">Address</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="address in addresses"
            :key="address.id"
            class="border border-gray-800/50 bg-gray-600/5 px-2 py-1"
          >
            <div class="flex justify-start items-center gap-2">
              <p class="text-sm font-semibold py-1">{{ address.name }}</p>
              |
              <span class="text-sm text-gray-600">
                (+63) {{ address.phone }}</span
              >
            </div>
            <div class="text-xs text-gray-700">
              <p class="">{{ address.shb }}</p>
              <p class="">{{ address.description }}</p>
              <p class="">{{ address.rpcb }}, {{ address.zip }}</p>
            </div>
            <span
              v-if="address.default"
              class="text-xs font-semibold border border-gray-800/50 px-2 shadow"
            >
              Default
            </span>
          </div>
        </div>
        <div class="my-2">
          <div class="text-sm font-semibold">Add new address</div>
          <div
            class="border p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"
          >
            <div class="border p-2">
              <div class="text-gray-700 text-sm">Contact</div>
              <input
                type="text"
                class="border w-full p-1 mb-1 placeholder:text-xs"
                placeholder="Full Name"
              />
              <input
                type="number"
                class="border w-full p-1 placeholder:text-xs"
                placeholder="Phone Number"
                name=""
                id=""
              />
            </div>
            <div class="border p-2 col-span-2">
              <div class="text-gray-700 text-sm">Address</div>

              <input
                type="text"
                class="border w-full p-1 placeholder:text-xs mb-1"
                placeholder="Region / Province / City / Barangay"
              />
              <input
                type="number"
                class="border w-full p-1 placeholder:text-xs mb-1"
                placeholder="Postal Code"
                name=""
                id=""
              />
              <input
                type=""
                class="border w-full p-1 placeholder:text-xs"
                placeholder="Street Name / House Number / Building"
                name=""
                id=""
              />
            </div>
            <div class="border p-2">
              <div class="text-gray-700 text-sm">Settings</div>
              <div
                class="flex justify-between text-xs items-center gap-2 border-b pb-1"
              >
                <p>Label As:</p>
                <div class="flex gap-2">
                  <button class="border px-2">Work</button>
                  <button class="border px-2">Home</button>
                </div>
              </div>
              <div class="flex justify-between text-xs pt-1 items-center gap-2">
                <p>Set as Default Address</p>
                <input type="checkbox" class="accent-gray-800 text-gray-800" />
              </div>
            </div>
          </div>
          <div class="my-2 flex justify-end">
            <button class="text-sm font-bold bg-gray-800 text-white px-4 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const addresses = ref([
  {
    id: 1,
    name: "John Michael",
    phone: "9895627812",
    rpcb: "Sount Luzon, Albay, Legazpi City, Brgy. 1",
    zip: "4500",
    shb: "Block 3 Lot 2, 102, 10 Apple Appartment",
    label: "Home",
    description: "This is my home address",
    default: true,
  },
]);
</script>
