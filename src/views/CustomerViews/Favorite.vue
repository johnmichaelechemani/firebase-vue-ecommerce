<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { favoritesItem } from "@/store";
import ProductModal from "@/components/ProductModal.vue";
import { deleteItems } from "@/scripts/firebaseDeleteApi.js";

const selected = ref([]);
const isShowModal = ref(false);
const selectedProduct = (item) => {
  isShowModal.value = true;
  selected.value = item;
};
</script>

<template>
  <div class="">
    <p class="text-xs font-semibold text-gray-500">My Favorites</p>
    <div class="my-2">
      <div
        v-for="product in favoritesItem"
        :key="product.id"
        @click="selectedProduct(product)"
        class="flex justify-between cursor-pointer items-start shadow p-1 border gap-2 my-2"
      >
        <div class="flex justify-start items-start gap-2">
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
              <span class="text-xs font-semibold"
                >({{ product.mallName }})</span
              >
            </p>
            <div class="flex justify-start items-center gap-2">
              <p class="text-sm font-bold">${{ product.price }}</p>
            </div>
          </div>
        </div>
        <button
          @click.stop="deleteItems('favorites', product.favoriteId)"
          class="flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"
        >
          <Icon
            icon="material-symbols-light:delete-outline"
            width="24"
            height="24"
          />
        </button>
      </div>
      <div
        v-if="favoritesItem.length === 0"
        class="text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"
      >
        No items added to favorites.
      </div>
    </div>
  </div>

  <ProductModal
    @closeModal="isShowModal = false"
    :product="selected"
    :isShowModal="isShowModal"
  />
</template>
