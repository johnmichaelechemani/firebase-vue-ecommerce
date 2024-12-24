<script setup>
import { ref, onMounted } from "vue";
import { useAuth } from "@/firebase.auth";
import { userData } from "@/store";
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  query,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
const { user } = useAuth();
const firestore = getFirestore();
const products = ref([]);
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

const getProducts = () => {
  const productsQuery = query(collection(firestore, "products"));
  onSnapshot(
    productsQuery,
    (querySnapshot) => {
      products.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Products updated in real-time:", products.value);
    },
    (error) => {
      console.error("Error fetching products:", error);
    }
  );
};
onMounted(() => {
  getProducts();
});
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="m-2">
      <p class="text-sm font-semibold py-2">Add Products</p>
      <form action="" @submit.prevent="add">
        <div class="flex flex-wrap gap-2">
          <div class="border p-2">
            <label
              for="name"
              class="block py-1 text-xs font-medium text-gray-700"
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
            <label
              for="name"
              class="block py-1 text-xs font-medium text-gray-700"
              >Product Discription:</label
            >
            <input
              type="text"
              v-model="productDiscription"
              class="border p-1"
            />
          </div>
          <div class="border p-2">
            <label
              for="name"
              class="block py-1 text-xs font-medium text-gray-700"
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
            <label
              for="name"
              class="block py-1 text-xs font-medium text-gray-700"
              >Product Discount:</label
            >
            <input type="number" v-model="productDiscount" class="border p-1" />
          </div>
          <div class="border p-2">
            <label
              for="name"
              class="block py-1 text-xs font-medium text-gray-700"
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
        </div>
        <div class="flex justify-start items-center gap-3">
          <button
            @click="clear"
            class="text-sm border py-2 font-semibold my-2 w-32 px-5"
          >
            Clear
          </button>
          <button
            type="submit"
            class="text-sm text-white font-semibold bg-gray-800 w-32 py-2 my-2 px-5"
          >
            Add
          </button>
        </div>
      </form>

      <p class="text-sm font-semibold my-2">Product Lists</p>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(item, index) in products"
          :key="index"
          class="hover:bg-gray-700/10 transition"
        >
          <div
            class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
          >
            <img
              v-if="item.image"
              :src="item.image"
              loading="lazy"
              alt=""
              class="object-center h-full w-full object-cover"
            />
            <div
              class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
            >
              <span>{{ item.discount }} % </span>
              <p>OFF</p>
            </div>
          </div>
          <div class="p-1">
            <h1
              class="sm:text-sm text-xs font-medium truncate whitespace-break-spaces max-w-28"
            >
              <span
                v-if="item.mall"
                class="text-[9px] bg-gray-800 text-white px-1"
                >Mall</span
              >
              {{ item.name }}
            </h1>
            <div class="flex justify-start gap-1 items-center">
              <p class="sm:text-lg text-sm text-gray-800 font-bold">
                ${{ item.price }}
              </p>
              <p class="text-xs text-gray-700 font-semibold">
                {{ item.sold }} Sold
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
