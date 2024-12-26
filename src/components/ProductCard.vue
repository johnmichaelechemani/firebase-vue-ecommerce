<script setup>
import { Icon } from "@iconify/vue";
import { defineProps, ref, watch } from "vue";
import ProductModal from "./ProductModal.vue";
import { formatPrice, formatSoldNumber } from "@/scripts/composables";

const props = defineProps({
  products: Object,
  require: true,
});

const selected = ref([]);
const isShowModal = ref(false);
const selectedProduct = (item) => {
  isShowModal.value = true;
  selected.value = item;
};

watch(isShowModal, (newValue) => {
  if (!newValue) {
    selected.value = [];
  }
});
</script>

<template>
  <div
    v-for="item in products"
    :key="item.id"
    @click="selectedProduct(item)"
    class="hover:bg-gray-700/10 transition"
  >
    <div
      class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
    >
      <img
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
      <div class="flex justify-start items-center" v-if="item.ratings">
        <Icon icon="material-symbols-light:star" width="20" height="20" />
        <span class="text-gray-600 font-semibold text-xs">{{
          item.ratings.toFixed(1)
        }}</span>
      </div>
      <h1
        class="sm:text-sm text-xs font-medium truncate whitespace-break-spaces max-w-28"
      >
        <span v-if="item.mall" class="text-[9px] bg-gray-800 text-white px-1"
          >Mall</span
        >
        {{ item.name }}
      </h1>
      <div class="flex justify-start gap-1 items-center">
        <p class="sm:text-lg text-sm text-gray-800 font-bold">
          ${{ formatPrice(item.price) }}
        </p>
        <p class="text-xs text-gray-700 font-semibold">
          {{ formatSoldNumber(item.sold) }} Sold
        </p>
      </div>
    </div>
  </div>

  <ProductModal
    @closeModal="isShowModal = false"
    :product="selected"
    :isShowModal="isShowModal"
  />
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
