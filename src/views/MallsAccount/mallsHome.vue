<script setup>
const image = "https://via.placeholder.com/150?text=Kids+Apparel";
import { ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import { products } from "@/store";

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
    mallProducts: products,
  },
  {
    id: 2,
    name: "ELECTRONICS",
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
    mallProducts: products,
  },
  {
    id: 3,
    name: " HOME & OUTDORS",
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
    mallProducts: products,
  },
  {
    id: 4,
    name: " ESSENTIALS",
    price: [
      {
        id: 1,
        lowestPrice: 500,
        action: () => sortProducts(500, 4),
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
    mallProducts: products,
  },
]);
const selectedPrice = ref(500);
const originalProducts = ref([]);

malls.value.forEach((mall) => {
  originalProducts.value.push({
    ...mall,
    mallProducts: [...mall.mallProducts],
  });
});

const sortProducts = (maxPrice) => {
  malls.value.forEach((mall, index) => {
    const originalProductsForMall = originalProducts.value[index].mallProducts;

    mall.mallProducts = originalProductsForMall.filter(
      (product) => product.price <= maxPrice
    );
  });
  selectedPrice.value = maxPrice;
};
</script>

<template>
  <div>
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
            @click="sortButton.action(sortButton.lowestPrice, mall.id)"
            :class="[
              selectedPrice === sortButton.lowestPrice
                ? 'bg-gray-800 border text-white'
                : 'border ',
              'px-4 py-1 text-xs font-semibold',
            ]"
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
</template>
