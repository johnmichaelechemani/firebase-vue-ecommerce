<script setup>
import { isLoggedIn, loginErrorMessage, userData } from "../store.js";
import { Icon } from "@iconify/vue";
import { ref, defineEmits, computed, defineProps } from "vue";
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
  decrement,
} from "@/scripts/composables.js";
import ErrorMessage from "./ErrorMessage.vue";

const firestore = getFirestore();
const route = useRouter();
const selectedSize = ref("");

const props = defineProps({
  isShowModal: Boolean,
  product: Object,
});

const emit = defineEmits(["closeModal"]);
const cartErrorMessage = ref("");
const showSuccessMessageFavorites = ref(false);
const showModal = () => {
  emit("closeModal");
  props.product.value = null;
  selectedSize.value = "";
};

const changeSize = (size) => {
  selectedSize.value = size;
};

const showSuccessMessage = ref(false);
const addToCart = async () => {
  if (selectedSize.value === "") {
    cartErrorMessage.value = "Please select a size";
    return;
  }
  if (isLoggedIn.value === false) {
    loginErrorMessage.value = "Please login before you shop!";
    route.push("/login");
    return;
  }
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

    console.log("Adding to cart Success");
    emit("closeModal");
    selectedSize.value = "";
  } catch (e) {
    cartErrorMessage.value = "Error adding to cart";
    console.error("Error adding to cart", e);
  }
  showSuccessMessage.value = true;
  setTimeout(() => {
    showSuccessMessage.value = false;
  }, 2000);
};
const addToFavorites = async () => {
  if (isLoggedIn.value === false) {
    loginErrorMessage.value = "Please login before you shop!";
    route.push("/login");
    return;
  }
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
    console.log("Adding to favorate Success");
    emit("closeModal");
  } catch (e) {
    console.log("Error", e);
  }

  showSuccessMessageFavorites.value = true;
  setTimeout(() => {
    showSuccessMessageFavorites.value = false;
  }, 2000);
};
</script>

<template>
  <transition>
    <div
      v-if="props.isShowModal"
      class="fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"
    >
      <div class="relative flex justify-center items-center h-full">
        <div class="relative">
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
            <div class="p-2 bg-gray-100 min-w-80">
              <router-link
                :to="{ name: 'mallStore', params: { id: product.mallId } }"
                @click="showModal"
                class="flex gap-1 justify-start items-center my-2"
              >
                <p class="text-xl font-semibold hover:underline">
                  {{ product.mallName }}
                </p>
                <Icon
                  icon="material-symbols-light:double-arrow"
                  width="30"
                  height="30"
                />
              </router-link>
              <ErrorMessage :errMessage="cartErrorMessage" />

              <div class="flex justify-start items-start gap-4">
                <div
                  class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
                >
                  <img
                    :src="product.image"
                    loading="lazy"
                    alt=""
                    class="object-center h-full w-full object-cover"
                  />
                  <div
                    class="absolute top-0 right-0 py-0.5 px-1 bg-gray-800 text-white font-medium text-center text-xs"
                  >
                    <span>{{ product.discount }} %</span>
                    <p>OFF</p>
                  </div>
                </div>
                <div>
                  <p class="text-sm font-semibold">{{ product.name }}</p>
                  <div class="flex justify-start items-center gap-2">
                    <p class="text-lg font-bold">
                      $ {{ formatPrice(product.price) }}
                    </p>
                  </div>
                  <div class="font-medium flex flex-wrap gap-2 my-2">
                    <span
                      @click="changeSize('sm')"
                      :class="[
                        selectedSize === 'sm'
                          ? 'bg-gray-700 text-white'
                          : 'border',
                        ' px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold',
                      ]"
                      >SM</span
                    >
                    <span
                      @click="changeSize('md')"
                      :class="[
                        selectedSize === 'md'
                          ? 'bg-gray-700 text-white'
                          : 'border',
                        ' px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold',
                      ]"
                      >MD</span
                    >
                    <span
                      @click="changeSize('lg')"
                      :class="[
                        selectedSize === 'lg'
                          ? 'bg-gray-700 text-white'
                          : 'border',
                        ' px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold',
                      ]"
                      >LG</span
                    >
                    <span
                      @click="changeSize('xl')"
                      :class="[
                        selectedSize === 'xl'
                          ? 'bg-gray-700 text-white'
                          : 'border',
                        ' px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold',
                      ]"
                      >XL</span
                    >
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
                  <div class="my-2">
                    <button
                      @click="addToCart"
                      class="bg-gray-800 text-white font-semibold text-sm py-2 w-full"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex justify-start items-center">
                <button
                  @click="addToFavorites"
                  class="p-1 border rounded-full shadow-sm hover:bg-gray-700/10 transition"
                >
                  <Icon
                    icon="material-symbols-light:favorite-outline"
                    width="24"
                    height="24"
                  />
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
                  Decription:
                  <p>{{ product.discription }}</p>
                </div>
                <hr />
                <div class="text-sm font-semibold">Reviews:</div>
              </div>
            </div>
          </div>
          <transition>
            <div
              v-if="showSuccessMessage"
              class="absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"
            >
              Added to Cart!
            </div>
          </transition>
          <transition>
            <div
              v-if="showSuccessMessageFavorites"
              class="absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"
            >
              Added to Favorites!
            </div>
          </transition>
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
