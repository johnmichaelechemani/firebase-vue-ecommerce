<script setup>
const image = "https://via.placeholder.com/150?text=Kids+Apparel";
import { ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";

const malls = ref([
  {
    id: 1,
    name: "FASHION",
    price: [
      {
        id: 1,
        lowestPrice: 500,
        action: () => sortProducts(500),
      },
      {
        id: 2,
        lowestPrice: 700,
        action: () => sortProducts(700),
      },
      {
        id: 3,
        lowestPrice: 1500,
        action: () => sortProducts(1500),
      },
    ],
    mallLogo: [
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
    ],
    mallProducts: [
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
      {
        id: 2,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 3,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 4,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 5,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
    ],
  },
  {
    id: 2,
    name: "ELECTRONICS",
    mallLogo: [
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
    ],
    mallProducts: [
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
      {
        id: 2,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 3,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 4,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 5,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
    ],
  },
  {
    id: 3,
    name: " HOME & OUTDORS",
    mallLogo: [
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
    ],
    mallProducts: [
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
      {
        id: 2,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 3,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 4,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 5,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
    ],
  },
  {
    id: 4,
    name: " ESSENTIALS",
    mallLogo: [
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
      {
        id: 1,
        image: image,
        alt: "Mall 1 Logo",
      },
    ],
    mallProducts: [
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
      {
        id: 2,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 3,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 4,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
      {
        id: 5,
        name: "Shoes ni Mike",
        category: "shoes",
        mall: true,
        price: Math.floor(Math.random() * 500) + 50,
        image: image,
        ratings: Math.floor(Math.random() * 5) + 1,
        discount: Math.floor(Math.random() * 50),
        sold: Math.floor(Math.random() * 1000) + 100,
      },
    ],
  },
]);

const sortProducts = (maxPrice) => {
  malls.value.forEach((mall) => {
    mall.mallProducts = mall.mallProducts.filter(
      (product) => product.price <= maxPrice
    );
  });
};
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div
      class="p-2 relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32 w-full"
    >
      <div v-for="mall in malls" :key="mall.id" class="my-2">
        <div class="text-lg font-extrabold text-gray-800 drop-shadow">
          {{ mall.name }}
        </div>
        <div class="flex overflow-x-scroll no-scrollbar gap-4">
          <div class="my-2" v-for="item in mall.mallLogo" :key="item.id">
            <div class="size-20">
              <img
                :src="item.image"
                loading="lazy"
                alt=""
                class="object-center h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-start items-center my-2">
          <div v-for="sortButton in mall.price" :key="sortButton.id">
            <button
              @click="sortButton.action"
              class="px-4 py-1 bg-gray-800 text-white text-xs font-semibold"
            >
              {{ sortButton.lowestPrice }} & BELOW
            </button>
          </div>
        </div>
        <div class="flex overflow-x-scroll no-scrollbar gap-4">
          <ProductCard :products="mall.mallProducts" />
        </div>
      </div>
    </div>
  </div>
</template>
