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
import { getMallProducts, mallProducts } from "@/scripts/firebaseGetApi";

const { user } = useAuth();
const storage = getStorage();
const firestore = getFirestore();
const isLoading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");
const product = ref({
  name: "",
  description: "",
  price: "",
  discount: "",
  image: null,
  category: "",
  inventory: 0,
  imagePreview: null,
});
const productImageInput = ref(null);

const triggerProfileImageUpload = () => {
  productImageInput.value.click();
};

const handleProductImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      product.value.imagePreview = e.target.result;
      product.value.image = file;
    };
    reader.readAsDataURL(file);
  }
};

const add = async () => {
  if (!validateProduct(product.value)) {
    errorMessage.value = "Please fill all required fields.";
    setTimeout(() => {
      errorMessage.value = "";
    }, 2000);
    return;
  }
  isLoading.value = true;
  let productImageUpload = "";
  if (product.value.image instanceof File) {
    try {
      const imageUrl = await uploadImageToStorage(
        product.value.image,
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
      name: product.value.name,
      description: product.value.description,
      price: product.value.price,
      image: productImageUpload,
      discount: product.value.discount,
      inventory: product.value.inventory,
      shipping: 0,
      quantity: 1,
      mall: true,
      ratings: 0,
      sold: 0,
      category: product.value.category,
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

const validateProduct = (product) => {
  return (
    product.name &&
    product.description &&
    product.price &&
    product.category &&
    product.inventory >= 0
  );
};
const clear = () => {
  product.value = {
    name: "",
    description: "",
    price: "",
    discount: "",
    image: null,
    category: "",
    inventory: 0,
    imagePreview: null,
  };
};

onMounted(() => {
  getMallProducts();
});
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="absolute top-2 right-2">
      <AlertMessage
        v-if="deleteMessage !== ''"
        :message="deleteMessage"
        color="red"
      />
      <AlertMessage
        v-if="errorMessage !== ''"
        :message="errorMessage"
        color="red"
      />
      <AlertMessage
        v-if="successMessage !== ''"
        :message="successMessage"
        color="green"
      />
    </div>
    <div
      class="m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)] pb-32"
    >
      <p class="text-sm font-semibold py-2">Add Products</p>
      <form action="">
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <div
            class="relative bg-gray-500/50 col-span-1 max-w-70 items-center row-span-2"
          >
            <input
              type="file"
              ref="productImageInput"
              @change="handleProductImageUpload"
              accept="image/*"
              class="hidden"
            />
            <img
              v-if="product.imagePreview"
              :src="product.imagePreview"
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
            <div
              v-if="!product.imagePreview"
              class="text-sm h-full text-gray-700 items-center flex justify-center font-semibold py-2"
            >
              <div>
                Upload image
                <div class="flex flex-col items-center gap-2">
                  <Icon
                    icon="material-symbols-light:upload"
                    width="24"
                    height="24"
                  />
                </div>
              </div>
            </div>
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
              v-model="product.name"
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
              v-model="product.description"
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
                v-model="product.price"
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
                v-model="product.discount"
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
                v-model="product.inventory"
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
              v-model="product.category"
              id=""
              class="border text-sm p-1 w-full"
            >
              <option value="Electronics" class="text-xs font-semibold">
                Electronics
              </option>
              <option value="Kitchen" class="text-xs font-semibold">
                Kitchen Tools
              </option>
              <option value="Mens" class="text-xs font-semibold">
                Men Clothing
              </option>
              <option value="Womens" class="text-xs font-semibold">
                Women Clothing
              </option>
              <option value="Kids" class="text-xs font-semibold">
                Kids Clothing
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
                <th scope="col" class="px-6 py-3">Image</th>
                <th scope="col" class="px-6 py-3">Product name</th>
                <th scope="col" class="px-6 py-3">Category</th>
                <th scope="col" class="px-6 py-3">Inventory</th>
                <th scope="col" class="px-6 py-3">Discount</th>
                <th scope="col" class="px-6 py-3">Price</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody v-for="item in mallProducts" :key="item.id">
              <tr class="border-b">
                <td v-if="item.image" class="px-6 py-4">
                  <div class="size-10">
                    <img
                      :src="item.image"
                      alt=""
                      loading="lazy"
                      class="w-full h-full object-cover object-center"
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  class="px-6 py-4 truncate max-w-52 uppercase font-medium whitespace-nowrap"
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
            <tbody v-if="mallProducts.length === 0" class="">
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
