<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="absolute top-2 z-10 right-2">
      <AlertMessage
        v-if="alert !== ''"
        :message="alert.message"
        :color="alert.color"
      />
    </div>
    <div
      class="p-2 relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32 w-full"
    >
      <p class="text-sm font-semibold capitalize border-b pb-2">My Addresses</p>
      <div>
        <p class="text-sm font-semibold py-1">Address</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          <div
            v-for="address in addresses"
            :key="address.id"
            :class="address.default ? 'border-gray-800/50 bg-gray-600/5' : ''"
            class="border px-2 py-1"
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
                v-model="formData.name"
                type="text"
                placeholder="Full Name"
                class="border placeholder:text-xs w-full text-sm p-1 my-1"
              />
              <input
                v-model="formData.phone"
                type="number"
                placeholder="Phone Number"
                class="border placeholder:text-xs w-full text-sm p-1 my-1"
              />
            </div>
            <div class="border p-2 col-span-2">
              <div class="text-gray-700 text-sm">Address</div>

              <input
                v-model="formData.shb"
                type="text"
                placeholder="Street/House/Building"
                class="border placeholder:text-xs w-full text-sm p-1 my-1"
              />
              <input
                v-model="formData.description"
                type="text"
                placeholder="Additional Details"
                class="border placeholder:text-xs w-full text-sm p-1 my-1"
              />
              <input
                v-model="formData.rpcb"
                type="text"
                placeholder="Region/Province/City/Barangay"
                class="border placeholder:text-xs w-full text-sm p-1 my-1"
              />
              <input
                v-model="formData.zip"
                type="text"
                placeholder="ZIP Code"
                class="border placeholder:text-xs w-full text-sm p-1 my-1"
              />
            </div>
            <div class="border p-2">
              <div class="text-gray-700 text-sm">Settings</div>
              <div
                class="flex justify-between text-xs items-center gap-2 border-b pb-1"
              >
                <p>Label As:</p>
                <div class="flex gap-2">
                  <button class="border px-2" @click="addLabel('work')">
                    Work
                  </button>
                  <button class="border px-2" @click="addLabel('home')">
                    Home
                  </button>
                </div>
              </div>
              <div class="flex justify-between text-xs pt-1 items-center gap-2">
                <label for="defaultAddress" class="text-sm text-gray-700"
                  >Set as default address</label
                >

                <input
                  v-model="formData.default"
                  type="checkbox"
                  id="defaultAddress"
                />
              </div>
            </div>
          </div>
          <div class="my-2 flex justify-end">
            <button
              @click="handleSubmit"
              class="text-sm font-bold bg-gray-800 text-white px-4 py-2"
            >
              Save Address
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AlertMessage from "@/components/AlertMessage.vue";

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
  {
    id: 2,
    name: "John Michael",
    phone: "9895627812",
    rpcb: "Sount Luzon, Albay, Legazpi City, Brgy. 1",
    zip: "4500",
    shb: "Block 3 Lot 2, 102, 10 Apple Appartment",
    label: "Home",
    description: null,
    default: false,
  },
]);

const formData = ref({
  name: "",
  phone: "",
  shb: "",
  description: "",
  rpcb: "",
  zip: "",
  label: "",
  default: false,
});

const alert = ref({ message: "", color: "" });

const addLabel = (label) => {
  formData.value.label = label;
};

const handleSubmit = async () => {
  try {
    if (!validateForm()) return;
    addresses.value.push(formData.value);
    console.log(formData.value);
    alert.value = { message: "Address saved successfully", color: "green" };
    resetForm();
  } catch (error) {
    alert.value = { message: "Error saving address", color: "red" };
    console.error("Error:", error);
  }
};

const validateForm = () => {
  const required = ["name", "phone", "shb", "rpcb", "zip"];
  for (const field of required) {
    if (!formData.value[field]) {
      alert.value = { message: `${field} is required`, color: "red" };
      return false;
    }
  }
  return true;
};

const resetForm = () => {
  formData.value = {
    name: "",
    phone: "",
    shb: "",
    description: "",
    rpcb: "",
    zip: "",
    default: false,
  };
};
</script>
