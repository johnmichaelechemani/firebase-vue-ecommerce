<script setup>
import ProductCard from "./ProductCard.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";
import Rep from "../assets/dummyImages/ref.png";
import Computer from "../assets/dummyImages/computer.jpg";
import Shirt from "../assets/dummyImages/shirt.jpg";
import Shoes from "../assets/dummyImages/shoes.jpg";
const router = useRouter();
const route = useRoute();
const queryForCategories = (query) => {
  router.push({
    path: "/",
    query: { category: query },
  });
};
const filteredProducts = computed(() => {
  const category = route.query.category;
  if (category) {
    return Products.value.filter((product) => product.category === category);
  }
  return Products.value;
});
const Products = ref([
  {
    id: 1,
    name: "Shoes ni Mike",
    category: "shoes",
    price: Math.floor(Math.random() * 500) + 50,
    image: Shoes,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 50),
    sold: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 2,
    name: "Home Appliances Pro",
    category: "home-appliances",
    price: Math.floor(Math.random() * 500) + 200,
    image: Rep,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 70),
    sold: Math.floor(Math.random() * 2000) + 500,
  },
  {
    id: 3,
    name: "Casual Apparel",
    category: "mens-womens-apparel",
    price: Math.floor(Math.random() * 300) + 50,
    image: Shirt,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 40),
    sold: Math.floor(Math.random() * 1500) + 200,
  },
  {
    id: 4,
    name: "High-Performance Laptop",
    category: "computers",
    price: Math.floor(Math.random() * 2000) + 500,
    image: Computer,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 30),
    sold: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 5,
    name: "Kids Fun Apparel",
    category: "kids-apparel",
    price: Math.floor(Math.random() * 200) + 30,
    image: "https://via.placeholder.com/150?text=Kids+Apparel",
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 50),
    sold: Math.floor(Math.random() * 800) + 100,
  },
  {
    id: 6,
    name: "Kitchen Essentials",
    category: "kitchen-tools",
    price: Math.floor(Math.random() * 100) + 20,
    image: "https://via.placeholder.com/150?text=Kitchen+Tools",
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 25),
    sold: Math.floor(Math.random() * 1000) + 50,
  },
]);

const Category = ref([
  {
    id: 1,
    name: "HOME APPLIANCES",
    category: "home-appliances",
  },
  {
    id: 2,
    name: "MENS & WOMEN APPARELS",
    category: "mens-womens-apparel",
  },
  {
    id: 3,
    name: "COMPUTERS",
    category: "computers",
  },
  {
    id: 4,
    name: "KIDS APPARELS",
    category: "kids-apparel",
  },
  {
    id: 5,
    name: "KITCHEN TOOLS",
    category: "kitchen-tools",
  },
]);
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="py-2">
      <nav
        class="p-2 no-scrollbar flex overflow-x-auto gap-2 shadow-sm whitespace-nowrap"
      >
        <button
          @click="router.push({ path: '/' })"
          :class="[
            Object.keys($route.query).length === 0
              ? 'bg-gray-800 text-white'
              : '',
            'px-2 py-1 text-sm font-semibold border border-gray-700/50',
          ]"
        >
          All
        </button>
        <button
          v-for="category in Category"
          :key="category.id"
          @click="queryForCategories(category.category)"
          :class="[
            $route.query.category === category.category
              ? 'bg-gray-800 text-white'
              : 'hover:bg-gray-700/10',
            'px-2 py-1 text-sm font-semibold border  transition border-gray-700/50',
          ]"
        >
          {{ category.name }}
        </button>
      </nav>

      <div
        class="relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-48"
      >
        <div class="m-2">
          <h1 class="text-md font-semibold my-2">Products</h1>
          <div class="flex flex-wrap gap-1">
            <ProductCard :products="filteredProducts" />
          </div>
        </div>
        <div class="m-2">
          <h1 class="text-md font-semibold my-2">Recommendations</h1>
          <div class="flex flex-wrap gap-1">
            <ProductCard :products="filteredProducts" />
          </div>
        </div>

        <div class="m-2">
          <h1 class="text-md font-semibold my-2">Discover</h1>
          <div class="flex gap-1 overflow-x-auto">
            <ProductCard :products="filteredProducts" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
