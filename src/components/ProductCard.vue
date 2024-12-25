<script setup>
import { Icon } from "@iconify/vue";
import { defineProps, ref } from "vue";
import ProductModal from "./ProductModal.vue";

const props = defineProps({
  products: Object,
  require: true,
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

const selected = ref([]);
const isShowModal = ref(false);
const selectedProduct = (item) => {
  isShowModal.value = true;
  selected.value = item;
};
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
      <div class="flex" v-if="item.ratings">
        <Icon
          v-for="(icon, index) in getStarIcons(item.ratings)"
          :key="index"
          :icon="icon"
          width="20"
          height="20"
        />
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
          ${{ item.price }}
        </p>
        <p class="text-xs text-gray-700 font-semibold">{{ item.sold }} Sold</p>
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
