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
  orderBy,
} from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { deleteProducts, deleteMessage } from "@/scripts/firebaseDeleteApi";
import AlertMessage from "@/components/AlertMessage.vue";

const { user } = useAuth();
const storage = getStorage();
const firestore = getFirestore();
const products = ref([]);
const productName = ref("");
const productDiscription = ref("");
const productPrice = ref("");
const productDiscount = ref("");
const productImage = ref("");
const productCategory = ref("");
const productInventory = ref(0);
const productImagePreview = ref(null);
const productImageInput = ref(null);
const isLoading = ref(false);
const successMessage = ref("");

const triggerProfileImageUpload = () => {
  productImageInput.value.click();
};
const handleProductImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      productImagePreview.value = e.target.result;
      productImage.value = file;
    };
    reader.readAsDataURL(file);
  }
};

const add = async () => {
  isLoading.value = true;
  let productImageUpload = "";
  if (productImage.value instanceof File) {
    try {
      const imageUrl = await uploadImageToStorage(
        productImage.value,
        `products/${user.value.uid}/${Date.now()}_image`
      );
      if (imageUrl) {
        productImageUpload = imageUrl;
      }
    } catch (error) {
      console.error("Image upload failed:", error);
      isLoading.value = false;
      return;
    }
  }
  try {
    await addDoc(collection(firestore, "products"), {
      name: productName.value,
      discription: productDiscription.value,
      price: productPrice.value,
      image: productImageUpload,
      discount: productDiscount.value,
      inventory: productInventory.value,
      shipping: 0,
      quantity: 1,
      mall: true,
      ratings: 0,
      sold: 0,
      category: productCategory.value,
      mallId: user.value.uid,
      mallName: userData.value.userName,
      timestamp: serverTimestamp(),
    });
    successMessage.value = "Product Added Successfully";
    setTimeout(() => {
      successMessage.value = "";
    }, 2000);
    clear();
  } catch (e) {
    console.error("Error adding product:", e);
  } finally {
    isLoading.value = false;
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
const uploadImageToStorage = async (file, path) => {
  if (!file || !user.value) return null;
  try {
    const imageRef = storageRef(storage, path);
    const snapshot = await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};
const getProducts = () => {
  const productsQuery = query(
    collection(firestore, "products"),
    orderBy("timestamp", "desc"),
    where("mallId", "==", userData.value.userId)
  );
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
const clear = () => {
  productName.value = "";
  productDiscription.value = "";
  productPrice.value = "";
  productDiscount.value = "";
  productImage.value = null;
  productCategory.value = "";
  productInventory.value = 0;
  productImagePreview.value = null;
  console.log("Cleared");
};

onMounted(() => {
  getProducts();
});
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="absolute top-2 right-2" v-if="successMessage !== ''">
      <AlertMessage :message="successMessage" color="green" />
    </div>
    <div class="absolute top-2 right-2" v-if="deleteMessage !== ''">
      <AlertMessage :message="deleteMessage" color="red" />
    </div>
    <div
      class="m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)] pb-32"
    >
      <p class="text-sm font-semibold py-2">Add Products</p>
      <form action="">
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <div class="relative sm:size-20 col-span-1 size-10 bg-gray-500/50">
            <input
              type="file"
              ref="productImageInput"
              @change="handleProductImageUpload"
              accept="image/*"
              class="hidden"
            />
            <img
              v-if="productImagePreview"
              :src="productImagePreview"
              alt="productimage"
              loading="lazy"
              class="w-full h-full object-cover object-center"
            />
            <button
              @click.prevent="triggerProfileImageUpload"
              class="absolute bottom-0 shadow right-0 border-2 bg-white"
            >
              <Icon
                icon="material-symbols-light:edit-outline"
                width="24"
                height="24"
              />
            </button>
          </div>
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
              class="border p-1 w-full"
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
              class="border p-1 w-full"
            />
          </div>
          <div class="border p-2">
            <label
              for="name"
              class="block py-1 text-xs font-medium text-gray-700"
            >
              Price:</label
            >

            <div class="border flex items-center gap-1 px-3 w-full">
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

            <div class="border flex items-center gap-1 px-3 w-full">
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

            <div class="border flex items-center gap-1 px-3 w-full">
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
              class="border text-sm p-1 w-full"
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
          class="text-sm text-center flex justify-center items-center text-white font-semibold bg-gray-800 w-32 py-2 my-2 px-5"
        >
          <span v-if="!isLoading">Add</span>
          <span v-else>
            <Icon icon="eos-icons:loading" width="20" height="20" />
          </span>
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
            <tbody v-for="item in products" :key="item.id">
              <tr class="border-b">
                <th
                  scope="row"
                  class="px-6 py-4 uppercase font-medium whitespace-nowrap"
                >
                  {{ item.name }}
                </th>
                <td class="px-6 py-4">{{ item.category }}</td>
                <td class="px-6 py-4">{{ item.inventory }}</td>
                <td class="px-6 py-4">{{ item.discount }}</td>
                <td class="px-6 py-4">${{ item.price }}</td>
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
                    @click="deleteProducts('products', item.id)"
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
