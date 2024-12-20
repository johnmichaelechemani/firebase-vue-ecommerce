<script setup>
import {
  isLoggedIn,
  loginErrorMessage,
  cartItems,
  favoritesItem,
} from "../store.js";
import { Icon } from "@iconify/vue";
import { ref, computed, defineProps, Transition } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();
const quantity = ref(1);
const selectedSize = ref("");

const props = defineProps({
  product: Object,
  require: true,
});

const changeSize = (size) => {
  selectedSize.value = size;
};

const incerment = () => {
  quantity.value += 1;
};
const decrement = () => {
  if (quantity.value > 0) {
    quantity.value -= 1;
  }
};

const showSuccessMessage = ref(false);
const addToCart = () => {
  if (isLoggedIn.value === false) {
    loginErrorMessage.value = "Please login before you shop!";
    route.push("/login");
  }
  const productToAdd = {
    id: props.product.id,
    name: props.product.name,
    store: "Mike Store",
    price: props.product.price,
    size: selectedSize.value,
    quantity: quantity.value,
    image: props.product.image,
    discount: props.product.discount,
  };

  // Push the product object to cartItems
  cartItems.value.push(productToAdd);

  showSuccessMessage.value = true;
  setTimeout(() => {
    showSuccessMessage.value = false;
  }, 2000);

  console.log("Added to cart", productToAdd);
};

const isAddToCartDisabled = computed(() => {
  return quantity.value === 0 || selectedSize.value === "";
});

const getStarIcons = (ratings) => {
  const fullStars = Math.floor(ratings);
  const halfStar = ratings % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return [
    ...Array(fullStars).fill("material-symbols-light:star"),
    ...Array(halfStar).fill("material-symbols-light:star-half"),
    ...Array(emptyStars).fill("material-symbols-light:star-outline"),
  ];
};

const addToFavorites = () => {
  const productToAdd = {
    id: props.product.id,
    name: props.product.name,
    store: "Mike Store",
    price: props.product.price,
    image: props.product.image,
  };
  favoritesItem.value.push(productToAdd);
};
</script>

<template>
  <div>
    <div class="p-2 bg-gray-100 min-w-80">
      <router-link :to="{ name: 'mallStore', params: { id: product.mallId } }">
        <p class="text-xl font-semibold mt-2 hover:underline">
          {{ product.mallName }}
        </p>
      </router-link>

      <div class="flex my-2">
        <Icon
          v-for="(icon, index) in getStarIcons(product.ratings)"
          :key="index"
          :icon="icon"
          width="24"
          height="24"
        />
      </div>
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
            class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
          >
            <span>{{ product.discount }} %</span>
            <p>OFF</p>
          </div>
        </div>
        <div>
          <p class="text-sm font-semibold">{{ product.name }}</p>
          <div class="flex justify-start items-center gap-2">
            <p class="text-lg font-bold">${{ product.price }}</p>
          </div>
          <div class="font-medium flex flex-wrap gap-2 my-2">
            <span
              @click="changeSize('sm')"
              :class="[
                selectedSize === 'sm' ? 'bg-gray-700 text-white' : 'border',
                ' px-2 shadow w-10 text-center cursor-pointer  transition text-sm',
              ]"
              >sm</span
            >
            <span
              @click="changeSize('md')"
              :class="[
                selectedSize === 'md' ? 'bg-gray-700 text-white' : 'border',
                ' px-2 shadow w-10 text-center cursor-pointer  transition text-sm',
              ]"
              >md</span
            >
            <span
              @click="changeSize('lg')"
              :class="[
                selectedSize === 'lg' ? 'bg-gray-700 text-white' : 'border',
                ' px-2 shadow w-10 text-center cursor-pointer  transition text-sm',
              ]"
              >lg</span
            >
            <span
              @click="changeSize('xl')"
              :class="[
                selectedSize === 'xl' ? 'bg-gray-700 text-white' : 'border',
                ' px-2 shadow w-10 text-center cursor-pointer  transition text-sm',
              ]"
              >xl</span
            >
          </div>
          <div class="font-semibold flex justify-start items-center gap-2">
            <span class="font-semibold text-sm">QTY: </span>
            <div class="flex justify-start items-center gap-2">
              <button
                @click="decrement"
                class="hover:bg-gray-700/20 rounded-full transition"
              >
                <Icon
                  icon="material-symbols-light:arrow-left"
                  width="32"
                  height="32"
                />
              </button>
              <div class="px-4 py-1 border rounded-full">{{ quantity }}</div>
              <button
                @click="incerment"
                class="hover:bg-gray-700/20 rounded-full transition"
              >
                <Icon
                  icon="material-symbols-light:arrow-right"
                  width="32"
                  height="32"
                />
              </button>
            </div>
          </div>
          <div class="my-2">
            <button
              @click="addToCart"
              class="bg-gray-800 text-white font-semibold text-sm py-2 w-full"
              :disabled="isAddToCartDisabled"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

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

      <div class="my-1">
        <div class="text-sm font-semibold">Decription:</div>
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
