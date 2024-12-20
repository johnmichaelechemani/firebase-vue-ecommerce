<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { products } from "@/store";
</script>

<template>
  <div class="">
    <div class="relative mb-14">
      <div class="w-full h-32 bg-gray-700/50"></div>
      <div
        class="size-20 bg-gray-700 absolute -bottom-10 left-2 shadow-xl"
      ></div>
    </div>
    <div class="mb-3">
      <h1 class="font-semibold text-lg">Store ni Mike</h1>
    </div>
    <div class="flex justify-start items-center gap-4">
      <button class="px-4 bg-gray-800 py-1 text-sm font-semibold text-white">
        Shop
      </button>
      <button class="text-sm px-4 py-1 font-semibold">Products</button>
      <button class="text-sm px-4 py-1 font-semibold">Categories</button>
    </div>
    <hr />
    <div class="my-2">
      <p class="font-semibold text-sm my-2">Recommended For You</p>
      <div class="flex flex-wrap gap-1">
        <ProductCard :products="products" />
      </div>
    </div>
  </div>
</template>
