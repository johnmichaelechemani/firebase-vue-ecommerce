<script setup>
import { ref } from "vue";
import { useAuth } from "@/firebase.auth";
import { userData } from "@/store";
import {
  collection,
  addDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
const { user } = useAuth();
const firestore = getFirestore();
const productName = ref("");
const productDiscription = ref("");
const productPrice = ref("");
const productDiscount = ref("");
const productImage = ref(" https://via.placeholder.com/150?text=Nothing");
const productCategory = ref("");

const clear = () => {
  productName.value = "";
  productDiscription.value = "";
  productPrice.value = "";
  productDiscount.value = "";
  productImage.value = null;
  productCategory.value = "";
};
const add = async () => {
  try {
    await addDoc(collection(firestore, "products"), {
      name: productName.value,
      discription: productDiscription.value,
      price: productPrice.value,
      image: productImage.value,
      discount: productDiscount.value,
      mall: true,
      category: productCategory.value,
      mallId: user.value.uid,
      mallName: userData.value.userName,
      timestamp: serverTimestamp(),
    });

    console.log("Adding Success");
  } catch (e) {
    console.log("Error", e);
  }

  console.log(
    productName.value,
    productDiscription.value,
    productPrice.value,
    productDiscount.value,
    productCategory.value,
    user.value.uid,
    userData.value.userName
  );
};
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="m-2">
      <p class="text-sm font-semibold py-2">Add Products</p>
      <form action="" @submit.prevent="add" class="flex flex-wrap gap-2">
        <div class="border p-2">
          <label for="name" class="block py-1 text-xs font-medium text-gray-700"
            >Product Name:</label
          >
          <input
            required
            type="text"
            v-model="productName"
            class="border p-1"
          />
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
          <input
            required
            type="number"
            v-model="productPrice"
            class="border p-1"
          />
        </div>
        <div class="border p-2">
          <label for="name" class="block py-1 text-xs font-medium text-gray-700"
            >Product Discount:</label
          >
          <input type="number" v-model="productDiscount" class="border p-1" />
        </div>
        <div class="border p-2">
          <label for="name" class="block py-1 text-xs font-medium text-gray-700"
            >Product Category:</label
          >
          <select
            name=""
            required
            v-model="productCategory"
            id=""
            class="border text-sm p-1"
          >
            <option value="Electronics" class="text-xs font-semibold">
              Electronics
            </option>
            <option value="Kitchen" class="text-xs font-semibold">
              Kitchen Tools
            </option>
          </select>
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
