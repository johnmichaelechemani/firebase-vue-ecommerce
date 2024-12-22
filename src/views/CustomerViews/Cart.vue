<script setup>
import { ref, watch, computed } from "vue";
import { Icon } from "@iconify/vue";
import { cartItems } from "../../store.js";

const selected = ref([]);
const selectAll = ref(false);
watch(selectAll, (newValue) => {
  if (newValue) {
    selected.value = cartItems.value.map((product) => product.id);
  } else {
    selected.value = [];
  }
});
const toggleSelection = (productId) => {
  if (selected.value.includes(productId)) {
    selected.value = selected.value.filter((id) => id !== productId);
  } else {
    selected.value.push(productId);
  }
};
const isBuyDisabled = computed(() => {
  return selected.value.length === 0;
});

const purchase = () => {
  console.log("You have purchased the selected items", selected.value);
};
</script>

<template>
  <div class="">
    <p class="text-xs font-semibold text-gray-500">My Cart</p>
    <div class="my-2">
      <div
        class="flex justify-start items-center gap-2 mb-1"
        v-if="cartItems.length !== 0"
      >
        <input type="checkbox" class="accent-gray-700" v-model="selectAll" />
        <p class="text-xs font-semibold text-gray-700">Select All</p>
      </div>
      <hr />
      <div
        v-for="product in cartItems"
        :key="product.id"
        class="flex justify-between items-start gap-2 my-2"
      >
        <div class="flex justify-start items-start gap-2">
          <input
            type="checkbox"
            class="accent-gray-700"
            :checked="selected.includes(product.id)"
            @change="toggleSelection(product.id)"
          />
          <div class="size-10">
            <img
              :src="product.image"
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <p class="text-xs font-medium">
              {{ product.name }}
              <span class="text-xs font-semibold">({{ product.store }})</span>
            </p>
            <div class="flex justify-start items-center gap-2">
              <p class="text-sm font-bold">${{ product.price }}</p>
              <p class="text-xs font-semibold">qty: {{ product.quantity }}</p>
            </div>
          </div>
        </div>
        <div
          class="flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"
        >
          <Icon
            icon="material-symbols-light:delete-outline"
            width="24"
            height="24"
          />
        </div>
      </div>
      <hr />
    </div>
    <div
      v-if="cartItems.length === 0"
      class="text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"
    >
      No items added to cart.
    </div>
    <div>
      <button
        v-if="cartItems.length !== 0"
        @click="purchase"
        :class="[
          isBuyDisabled
            ? 'bg-gray-300 text-gray-500'
            : 'bg-gray-800 text-white',
          ' w-full text-sm py-2 font-semibold shadow',
        ]"
        :disabled="isBuyDisabled"
      >
        BUY
      </button>
    </div>
  </div>
</template>
