<script setup>
import { ref } from "vue";
const productName = ref("");
const productDiscription = ref("");
const productPrice = ref("");
const productDiscount = ref("");
const productImage = ref(null);

const clear = () => {
  productName.value = "";
  productDiscription.value = "";
  productPrice.value = "";
  productDiscount.value = "";
  productImage.value = null;
};
const add = async () => {
  try {
  } catch (e) {
    console.log("Error", e);
  }
  console.log(
    productName.value,
    productDiscription.value,
    productPrice.value,
    productDiscount.value
  );
};
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="m-2">
      <p class="text-sm font-semibold py-2">Add Products</p>
      <form action="" class="flex flex-wrap gap-2">
        <div class="border p-2">
          <label for="name" class="block py-1 text-xs font-medium text-gray-700"
            >Product Name:</label
          >
          <input type="text" v-model="productName" class="border p-1" />
        </div>
        <div class="border p-2">
          <label for="name" class="block py-1 text-xs font-medium text-gray-700"
            >Product Discription:</label
          >
          <input type="text" v-model="productDiscription" class="border p-1" />
        </div>
        <div class="border p-2">
          <label for="name" class="block py-1 text-xs font-medium text-gray-700"
            >Product Price:</label
          >
          <input type="number" v-model="productPrice" class="border p-1" />
        </div>
        <div class="border p-2">
          <label for="name" class="block py-1 text-xs font-medium text-gray-700"
            >Product Discount:</label
          >
          <input type="number" v-model="productDiscount" class="border p-1" />
        </div>
      </form>
      <div class="flex justify-start items-center gap-3">
        <button
          @click="clear"
          class="text-sm border py-2 font-semibold my-2 w-32 px-5"
        >
          Clear
        </button>
        <button
          @click="add"
          class="text-sm text-white font-semibold bg-gray-800 w-32 py-2 my-2 px-5"
        >
          Add
        </button>
      </div>
      <p class="text-sm font-semibold">Product Lists</p>
    </div>
  </div>
</template>
