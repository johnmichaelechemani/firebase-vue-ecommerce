<script setup>
import ProductCard from "./ProductCard.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { products, getProducts, isProductLoading } from "@/store";
import ProductLoading from "./ProductLoading.vue";
import FlashSale from "./FlashSale.vue";

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
    return products.value.filter((product) => product.category === category);
  }
  return products.value;
});

onMounted(() => {
  getProducts();
});

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

const flashSaleProducts = ref([
  {
    id: 1,
    name: "Samsung TV",
    price: 500,
    discount: 70,
    category: "home-appliances",
    image:
      "https://images.pexels.com/photos/2569997/pexels-photo-2569997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Dress",
    price: 9000,
    discount: 50,
    category: "dress",
    image:
      "https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Dress",
    price: 3500,
    discount: 99,
    category: "dress",
    image:
      "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        class="relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-48 text-gray-900"
      >
        <div class="m-2">
          <FlashSale :saleProducts="flashSaleProducts" />
        </div>
        <div class="m-2">
          <h1 class="text-lg font-semibold my-2">Products</h1>
          <div class="flex flex-wrap gap-1" v-if="!isProductLoading">
            <ProductCard :products="filteredProducts" />
          </div>
          <ProductLoading v-else />
        </div>
        <!-- <div class="m-2">
          <h1 class="text-lg font-semibold my-2">Recommendations</h1>
          <div class="flex flex-wrap gap-1" v-if="!isProductLoading">
            <ProductCard :products="filteredProducts" />
          </div>
          <ProductLoading v-else />
        </div>

        <div class="m-2">
          <h1 class="text-lg font-semibold my-2">Discover</h1>
          <div class="flex gap-1 overflow-x-auto" v-if="!isProductLoading">
            <ProductCard :products="filteredProducts" />
          </div>
          <ProductLoading v-else />
        </div> -->
      </div>
    </div>
  </div>
</template>
