<script setup>
import { ref, onMounted } from "vue";
import { useAuth } from "@/firebase.auth";
import { userData } from "@/store";
import { Icon } from "@iconify/vue";
import {
  collection,
  addDoc,
  getFirestore,
  query,
  onSnapshot,
  where,
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
const productInventory = ref(0);

const clear = () => {
  productName.value = "";
  productDiscription.value = "";
  productPrice.value = "";
  productDiscount.value = "";
  productImage.value = null;
  productCategory.value = "";
  productInventory.value = 0;
  console.log("Cleared");
};
const add = async () => {
  try {
    await addDoc(collection(firestore, "products"), {
      name: productName.value,
      discription: productDiscription.value,
      price: productPrice.value,
      image: productImage.value,
      discount: productDiscount.value,
      inventory: productInventory.value,
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
  const productsQuery = query(
    collection(firestore, "products"),
    where("mallId", "==", userData.value.userId)
  );
  onSnapshot(
    productsQuery,
    (querySnapshot) => {
      products.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //  console.log("Products updated in real-time:", products.value);
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
    <div
      class="m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)] pb-32"
    >
      <p class="text-sm font-semibold py-2">Add Products</p>
      <form action="">
        <div class="flex flex-wrap gap-2">
          <div class="border p-2">
            <label
              for="name"
              class="block py-1 text-xs font-medium text-gray-700"
            >
              Name:</label
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
            >
              Discription:</label
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
            >
              Price:</label
            >

            <div class="border flex items-center gap-1 px-3 max-w-32">
              $
              <input
                type="number"
                v-model="productPrice"
                class="w-full outline-none p-1"
              />
            </div>
          </div>
          <div class="border p-2">
            <label
              for="name"
              class="block py-1 text-xs font-medium text-gray-700"
            >
              Discount:</label
            >

            <div class="border flex items-center gap-1 px-3 max-w-32">
              <input
                type="number"
                v-model="productDiscount"
                class="w-full outline-none p-1"
              />
              %
            </div>
          </div>
          <div class="border p-2">
            <label
              for="name"
              class="block py-1 text-xs font-medium text-gray-700"
            >
              Inventory:</label
            >

            <div class="border flex items-center gap-1 px-3 max-w-32">
              x
              <input
                type="number"
                v-model="productInventory"
                class="w-full outline-none p-1"
              />
            </div>
          </div>
          <div class="border p-2">
            <label
              for="name"
              class="block py-1 text-xs font-medium text-gray-700"
            >
              Category:</label
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

      <p class="text-sm font-semibold my-2">Product Lists</p>
      <div class="flex flex-wrap gap-2">
        <div class="relative overflow-x-auto shadow-sm w-full">
          <table class="w-full text-sm text-left rtl:text-right">
            <thead class="text-xs text-white uppercase bg-gray-800">
              <tr>
                <th scope="col" class="px-6 py-3">Product name</th>
                <th scope="col" class="px-6 py-3">Category</th>
                <th scope="col" class="px-6 py-3">Inventory</th>
                <th scope="col" class="px-6 py-3">Discount</th>
                <th scope="col" class="px-6 py-3">Price</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in products" :key="index">
              <tr class="border-b">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  {{ item.name }}
                </th>
                <td class="px-6 py-4">{{ item.category }}</td>
                <td class="px-6 py-4">{{ item.inventory }}</td>
                <td class="px-6 py-4">{{ item.discount }}</td>
                <td class="px-6 py-4">$ {{ item.price }}</td>
                <td class="px-6 py-4 flex justify-start items-center gap-2">
                  <button
                    class="font-medium text-green-500 border border-green-500/20 p-1"
                  >
                    <Icon
                      icon="material-symbols-light:edit-outline"
                      width="20"
                      height="20"
                    />
                  </button>
                  <button
                    class="font-medium text-red-500 border border-red-500/20 p-1"
                  >
                    <Icon
                      icon="material-symbols-light:restore-from-trash-outline"
                      width="20"
                      height="20"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody v-if="products.length === 0" class="">
              <div class="p-2 text-sm font-semibold text-gray-500">
                No Products
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
