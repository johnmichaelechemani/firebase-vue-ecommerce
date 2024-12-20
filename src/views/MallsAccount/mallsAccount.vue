<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { products } from "@/store";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const activeTab = ref("shop");
</script>

<template>
  <div class="">
    <div class="relative mb-14">
      <div class="w-full h-32 bg-gray-700/50"></div>
      <div
        class="size-20 bg-gray-700 absolute -bottom-10 left-2 shadow-xl"
      ></div>
    </div>
    <div class="mb-3 flex justify-start items-center gap-2">
      <h1 class="font-semibold text-lg drop-shadow-lg">Store ni Mike</h1>
      <div class="p-1 shadow border hover:bg-gray-500/10">
        <Icon icon="material-symbols-light:chat-outline" width="24" height="24" />
      </div>
    </div>
    <div class="flex justify-start items-center gap-4">
      <button
        class="px-4 py-1 text-sm font-semibold"
        :class="{
          'bg-gray-800 text-white': activeTab === 'shop',
          'text-gray-800': activeTab !== 'shop',
        }"
        @click="activeTab = 'shop'"
      >
        Shop
      </button>
      <button
        class="px-4 py-1 text-sm font-semibold"
        :class="{
          'bg-gray-800 text-white': activeTab === 'products',
          'text-gray-800': activeTab !== 'products',
        }"
        @click="activeTab = 'products'"
      >
        Products
      </button>
      <button
        class="px-4 py-1 text-sm font-semibold"
        :class="{
          'bg-gray-800 text-white': activeTab === 'categories',
          'text-gray-800': activeTab !== 'categories',
        }"
        @click="activeTab = 'categories'"
      >
        Categories
      </button>
    </div>
    <hr />
    <div class="my-2">
      <p class="font-semibold text-sm my-2">Recommended For You</p>
      <div class="flex flex-wrap gap-1">
        <ProductCard v-if="activeTab === 'shop'" :products="products" />
      </div>
      <div v-if="activeTab === 'products'">
        <p>Products content goes here.</p>
      </div>
      <div v-if="activeTab === 'categories'">
        <p>Categories content goes here.</p>
      </div>
    </div>
  </div>
</template>
