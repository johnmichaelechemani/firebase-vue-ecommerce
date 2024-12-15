<script setup>
const image = "https://via.placeholder.com/150?text=Kids+Apparel";
import { ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";
const malls = ref([
  {
    id: 1,
    name: "Mall 1",
    image: image,
    description: "This is a description of Mall 1",
  },
  {
    id: 2,
    name: "Mall 1",
    image: image,
    description: "This is a description of Mall 1",
  },
  {
    id: 3,
    name: "Mall 1",
    image: image,
    description: "This is a description of Mall 1",
  },
  {
    id: 4,
    name: "Mall 1",
    image: image,
    description: "This is a description of Mall 1",
  },
]);

const mallProducts = ref([
  {
    id: 1,
    name: "Shoes ni Mike",
    category: "shoes",
    mall: true,
    price: Math.floor(Math.random() * 500) + 50,
    image: image,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 50),
    sold: Math.floor(Math.random() * 1000) + 100,
  },
]);
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div
      class="p-2 relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32 w-full"
    >
      <div class="text-lg font-extrabold text-gray-800 drop-shadow">
        FASHION
      </div>
      <div class="flex gap-4">
        <div class="my-2" v-for="mall in malls" :key="mall.id">
          <div class="size-20">
            <img
              :src="mall.image"
              loading="lazy"
              alt=""
              class="object-center h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div class="my-2 flex">
        <button class="px-4 py-1 bg-gray-800 text-white text-xs font-semibold">
          $1000 & BELOW
        </button>
        <button class="px-4 py-1 border text-xs font-semibold">
          $1000 & BELOW
        </button>
        <button class="px-4 py-1 border text-xs font-semibold">
          $1000 & BELOW
        </button>
      </div>
      <div>
        <ProductCard :products="mallProducts" />
      </div>
      <div class="text-lg font-extrabold text-gray-800 drop-shadow">
        ELECTRONICS
      </div>
      <div class="flex gap-4">
        <div class="my-2" v-for="mall in malls" :key="mall.id">
          <div class="size-20">
            <img
              :src="mall.image"
              loading="lazy"
              alt=""
              class="object-center h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div class="text-lg font-extrabold text-gray-800 drop-shadow">
        HOME & OUTDORS
      </div>
      <div class="flex gap-4">
        <div class="my-2" v-for="mall in malls" :key="mall.id">
          <div class="size-20">
            <img
              :src="mall.image"
              loading="lazy"
              alt=""
              class="object-center h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div class="text-lg font-extrabold text-gray-800 drop-shadow">
        ESSENTIALS
      </div>
      <div class="flex gap-4">
        <div class="my-2" v-for="mall in malls" :key="mall.id">
          <div class="size-20">
            <img
              :src="mall.image"
              loading="lazy"
              alt=""
              class="object-center h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
