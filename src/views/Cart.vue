<script setup>
import { ref } from "vue";

const cartProducts = ref([
  {
    id: 1,
    store: "Mike Store",
    name: "Shoes",
    price: 100,
    quantity: 1,
    image: "https://via.placeholder.com/150?text=Kids+Apparel",
  },
  {
    id: 2,
    store: "Mike Store",
    name: "Shoes",
    price: 100,
    quantity: 1,
    image: "https://via.placeholder.com/150?text=Kids+Apparel",
  },
]);
</script>

<template>
  <div>
    <p class="text-xs font-semibold text-gray-500">My Cart</p>
    <div class="my-2">
      <div
        v-for="product in cartProducts"
        :key="index"
        class="flex justify-start items-start gap-2"
      >
        <div class="size-10">
          <img
            :src="product.image"
            alt=""
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <p class="text-xs font-semibold">{{ product.store }}</p>
          <p class="text-xs font-medium">{{ product.name }}</p>
          <div class="flex justify-start items-center gap-2">
            <p class="text-sm font-bold">${{ product.price }}</p>
            <p class="text-xs font-semibold">qty: {{ product.quantity }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
