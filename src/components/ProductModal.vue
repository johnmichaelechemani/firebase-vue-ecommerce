<script setup>
import {
  isLoggedIn,
  loginErrorMessage,
  userData,
  mallsAccount,
  useMallsAccount,
} from "../store.js";
import { Icon } from "@iconify/vue";
import { ref, defineEmits, defineProps, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  collection,
  addDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import {
  formatSoldNumber,
  formatPrice,
  incerment,
  clearAlert,
  decrement,
} from "@/scripts/composables.js";
import ErrorMessage from "./AlertMessage.vue";

const firestore = getFirestore();
const route = useRouter();
const selectedSize = ref("");

const props = defineProps({
  isShowModal: Boolean,
  product: Object,
});

const currentMall = computed(() => {
  const mallId = props.product.mallId;
  return mallsAccount.value.find((mall) => mall.userId === mallId);
});

const mallData = computed(() => {
  return currentMall.value;
});

const emit = defineEmits(["closeModal"]);
const cartErrorMessage = ref("");
const showSuccessMessageFavorites = ref(false);
const showSuccessMessage = ref(false);
const showError = ref(false);
const isLoading = ref(false);
const isFavLoading = ref(false);

const showModal = () => {
  emit("closeModal");
  props.product.value = null;
  selectedSize.value = "";
};

const changeSize = (size) => {
  selectedSize.value = size;
};

const addToCart = async () => {
  if (selectedSize.value === "") {
    showError.value = true;
    cartErrorMessage.value = "Please select a size";
    clearAlert(cartErrorMessage);
    return;
  }
  if (isLoggedIn.value === false) {
    loginErrorMessage.value = "Please login before you shop!";
    route.push("/login");
    return;
  }
  isLoading.value = true;
  try {
    const cartItemData = {
      id: props.product.id,
      inventory: props.product.inventory,
      name: props.product.name,
      mallId: props.product.mallId,
      store: props.product.mallName,
      price: props.product.price,
      size: selectedSize.value,
      quantity: props.product.quantity,
      image: props.product.image,
      discount: props.product.discount,
    };

    const cartItemRef = await addDoc(
      collection(firestore, "carts", userData.value.userId, "items"),
      {
        ...cartItemData,
        cartItemId: null,
      }
    );

    await updateDoc(cartItemRef, {
      cartItemId: cartItemRef.id,
    });

    selectedSize.value = "";
    isLoading.value = false;
  } catch (e) {
    cartErrorMessage.value = "Error adding to cart";
    console.error("Error adding to cart", e);
    isLoading.value = false;
  }
  showSuccessMessage.value = true;
  clearAlert(showSuccessMessage);
};
const addToFavorites = async () => {
  if (isLoggedIn.value === false) {
    loginErrorMessage.value = "Please login before you shop!";
    route.push("/login");
    return;
  }
  isFavLoading.value = true;
  try {
    const favItemRef = await addDoc(
      collection(firestore, "favorites", userData.value.userId, "items"),
      {
        ...props.product,
        favoriteId: null,
      }
    );
    await updateDoc(favItemRef, {
      favoriteId: favItemRef.id,
    });
    isFavLoading.value = false;
  } catch (e) {
    console.log("Error", e);
  }
  showSuccessMessageFavorites.value = true;
  clearAlert(showSuccessMessageFavorites);
};

onMounted(async () => {
  try {
    await useMallsAccount();
  } catch (error) {
    console.error("Failed to load mall data:", error);
  }
});
</script>

<template>
  <transition>
    <div
      v-if="props.isShowModal"
      class="fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"
    >
      <div class="flex justify-center items-center h-full">
        <div class="relative max-w-96 bg-gray-100">
          <div class="absolute top-0 right-0">
            <button @click="showModal">
              <Icon
                icon="material-symbols-light:close-small-outline"
                width="24"
                height="24"
              />
            </button>
          </div>
          <div>
            <div class="p-2 min-w-80">
              <router-link
                :to="{ name: 'mallStore', params: { id: product.mallId } }"
                @click="showModal"
                class="flex gap-1 justify-between items-center mt-4 mb-2"
              >
                <div class="flex justify-start items-center">
                  <div
                    class="text-sm flex justify-start items-center gap-2 font-bold capitalize"
                  >
                    <div class="rounded-full border">
                      <Icon
                        v-if="!mallData.userPhotoURL"
                        icon="material-symbols-light:store"
                        width="24"
                        height="24"
                      />
                      <div class="size-10 rounded-full">
                        <img
                          v-if="mallData.userPhotoURL"
                          :src="mallData.userPhotoURL"
                          alt="profile"
                          loading="lazy"
                          class="w-full h-full object-cover rounded-full object-center"
                        />
                      </div>
                    </div>
                    {{ mallData.userName }}
                    <span
                      class="text-xs flex justify-center items-center bg-gray-700/5 rounded-sm shadow px-1"
                    >
                      <Icon
                        icon="material-symbols-light:star"
                        width="14"
                        height="14"
                        class="text-green-500"
                      />{{ mallData.rating }}</span
                    >
                  </div>
                </div>
                <div
                  class="border px-4 bg-gray-700/5 text-sm font-semibold rounded-sm"
                >
                  Visit
                </div>
              </router-link>

              <div class="h-[30rem] overflow-y-scroll no-scrollbar">
                <!-- alert messages -->
                <ErrorMessage
                  v-if="showError"
                  color="red"
                  :message="cartErrorMessage"
                />
                <ErrorMessage
                  v-if="showSuccessMessage"
                  color="green"
                  message="Added to Cart!"
                />
                <ErrorMessage
                  v-if="showSuccessMessageFavorites"
                  color="green"
                  message="Added to Favorites!"
                />
                <!-- alert messages -->

                <div class="flex justify-start items-start gap-4">
                  <div
                    class="min-sm:size-40 h-auto min-w-32 bg-gray-700/10 border-gray-700/20 border relative"
                  >
                    <img
                      :src="product.image"
                      loading="lazy"
                      alt=""
                      class="object-center h-full w-full object-cover"
                    />
                    <div
                      style="
                        clip-path: polygon(
                          0 0,
                          100% 0,
                          100% 100%,
                          51% 68%,
                          0 100%
                        );
                      "
                      class="absolute top-0 right-0 pb-4 px-1 bg-gray-800 text-white font-medium text-center"
                    >
                      <div class="relative flex">
                        <span class="text-[9px] pt-0.5"
                          >{{ product.discount }}%</span
                        >
                      </div>
                      <div class="flex justify-center items-start">
                        <p class="text-[10px]">OFF</p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm font-semibold capitalize">
                      {{ product.name }}
                    </p>
                    <div class="flex justify-start items-center gap-2">
                      <p class="text-lg font-bold">
                        ${{ formatPrice(product.price) }}
                      </p>
                    </div>
                    <div class="mb-1" v-if="props.product.size">
                      <p class="text-xs font-medium text-gray-600">Size:</p>
                      <div class="font-medium grid grid-cols-4 gap-1">
                        <span
                          v-for="item in props.product.size"
                          :key="item.id"
                          @click="changeSize(item)"
                          :class="[
                            selectedSize === item
                              ? 'bg-gray-700 text-white'
                              : 'border',
                            ' px-2 w-10 text-center cursor-pointer uppercase  transition text-xs border-gray-700/50',
                          ]"
                          >{{ item }}</span
                        >
                      </div>
                    </div>
                    <div v-if="props.product.specs" class="mb-1">
                      <p class="text-xs font-medium text-gray-600">
                        Storage Capacity:
                      </p>
                      <div class="font-medium flex flex-wrap gap-2">
                        <span
                          v-for="item in props.product.specs"
                          :key="item.id"
                          @click="changeSize(item)"
                          :class="[
                            selectedSize === item
                              ? 'bg-gray-700 text-white'
                              : 'border',
                            ' px-2 text-center cursor-pointer uppercase  transition text-xs border-gray-700/50',
                          ]"
                          >{{ item }}</span
                        >
                      </div>
                    </div>
                    <div
                      class="font-semibold flex justify-start items-center gap-2"
                    >
                      <span class="font-semibold text-sm">
                        <Icon
                          icon="material-symbols-light:production-quantity-limits"
                          width="20"
                          height="20"
                      /></span>
                      <div class="flex justify-start items-center">
                        <button
                          @click="decrement(props.product)"
                          :class="
                            props.product.quantity === 1
                              ? 'cursor-not-allowed text-gray-500'
                              : ''
                          "
                          class="hover:bg-gray-700/20 px-4 py-1 transition"
                        >
                          <Icon icon="mdi-light:minus" width="20" height="20" />
                        </button>
                        <div class="py-1 text-sm w-10 text-center border">
                          {{ props.product.quantity }}
                        </div>
                        <button
                          @click="incerment(props.product)"
                          :class="
                            props.product.inventory === props.product.quantity
                              ? 'cursor-not-allowed text-gray-500'
                              : ''
                          "
                          class="hover:bg-gray-700/20 px-4 py-1 transition"
                        >
                          <Icon icon="mdi-light:plus" width="20" height="20" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="props.product.color" class="mb-1">
                  <p class="text-xs font-medium text-gray-600">Color:</p>
                  <div class="font-medium flex flex-wrap gap-2">
                    <div
                      v-for="item in props.product.color"
                      :key="item.id"
                      @click="changeSize(item)"
                      :class="[
                        selectedSize === item
                          ? 'bg-gray-700 text-white'
                          : 'border',
                        ' text-center cursor-pointer uppercase  transition text-xs border-gray-700/50',
                      ]"
                    >
                      <div class="size-14 w-auto bg-gray-600">
                        <img
                          :src="props.product.image"
                          alt=""
                          class="w-full h-full object-cover object-center"
                        />
                      </div>
                      {{ item }}
                    </div>
                  </div>
                </div>

                <div class="flex justify-start items-center">
                  <button
                    @click="addToFavorites"
                    :class="
                      isFavLoading
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : ''
                    "
                    class="p-1 border rounded-full shadow-sm hover:bg-gray-700/10 transition"
                  >
                    <Icon
                      v-if="!isFavLoading"
                      icon="material-symbols-light:favorite-outline"
                      width="24"
                      height="24"
                    />
                    <span v-else
                      ><Icon icon="eos-icons:loading" width="24" height="24" />
                    </span>
                  </button>
                  <div
                    class="flex justify-start items-center"
                    v-if="product.ratings"
                  >
                    <Icon
                      icon="material-symbols-light:star"
                      width="20"
                      height="20"
                    />
                    <span class="text-gray-600 font-semibold text-sm pr-1"
                      >{{ product.ratings.toFixed(1) }}
                    </span>
                  </div>
                  <div
                    v-if="product.sold"
                    class="flex justify-start items-center text-gray-600 font-semibold text-sm"
                  >
                    | {{ formatSoldNumber(product.sold) }} Sold
                  </div>
                </div>

                <div class="my-1">
                  <div class="text-sm font-semibold">
                    Description:
                    <p>{{ product.description }}</p>
                  </div>
                  <hr />
                  <div class="text-sm font-semibold">
                    Reviews: Lorem ipsum is placeholder text commonly used in
                    the graphic, print, and publishing industries for previewing
                    layouts and visual mockups.Lorem ipsum is placeholder text
                    commonly used in the graphic, print, and publishing
                    industries for previewing layouts and visual mockups.Lorem
                    ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.Lorem ipsum is
                    placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual
                    mockups.Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </div>
                </div>
              </div>
              <div
                class="absolute bottom-0 left-0 w-full border-b-4 border-gray-800"
              >
                <div
                  class="w-full flex justify-start items-center px-2 backdrop-blur-2xl"
                >
                  <router-link
                    :to="{ name: 'mallStore', params: { id: product.mallId } }"
                  >
                    <div class="text-xs text-center pr-2">
                      <div class="flex justify-center items-center">
                        <Icon
                          icon="material-symbols-light:store-outline-rounded"
                          width="18"
                          height="18"
                        />
                      </div>
                      Shop
                    </div>
                  </router-link>
                  <router-link
                    :to="{ name: 'mallsChat', params: { id: product.mallId } }"
                  >
                    <div class="text-xs text-center px-2">
                      <div class="flex justify-center items-center">
                        <Icon
                          icon="material-symbols-light:chat-outline-rounded"
                          width="16"
                          height="16"
                        />
                      </div>
                      Chat
                    </div>
                  </router-link>
                  <div class="py-2 w-full">
                    <button
                      @click="addToCart"
                      :disabled="props.product.inventory === 0"
                      :class="
                        props.product.inventory === 0 || isLoading
                          ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                          : 'bg-gray-800 text-white'
                      "
                      class="font-semibold flex justify-center rounded-sm items-center gap-2 text-sm py-2 w-full"
                    >
                      {{
                        props.product.inventory === 0
                          ? "Out of Stock"
                          : "Add to Cart"
                      }}
                      <span v-if="isLoading"
                        ><Icon
                          icon="eos-icons:loading"
                          width="16"
                          height="16"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
