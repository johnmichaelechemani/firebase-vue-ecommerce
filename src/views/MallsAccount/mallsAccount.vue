<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { products } from "@/store";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const router = useRouter();
const route = useRoute();
const activeTab = ref("shop");

const queryForCategories = (query, id) => {
  router.push({
    path: `/malls/${id}/`,
    query: { category: query },
  });
};

onMounted(() => {
  queryForCategories("popular", route.params.id);
});

const productTags = ref([
  {
    id: 1,
    name: "Popular",
    category: "popular",
  },
  {
    id: 2,
    name: "Latest",
    category: "latest",
  },
  {
    id: 3,
    name: "Top Sales",
    category: "top_sales",
  },
  {
    id: 4,
    name: "Price",
    category: "price",
  },
]);
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
        <Icon
          icon="material-symbols-light:chat-outline"
          width="24"
          height="24"
        />
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
    </div>
    <hr />
    <div class="my-2">
      <div v-if="activeTab === 'shop'">
        <p class="font-semibold text-sm my-2">Recommended For You</p>
        <div class="flex flex-wrap gap-1">
          <ProductCard :products="products" />
        </div>
      </div>

      <div class="flex gap-2" v-if="activeTab === 'products'">
        <button
          v-for="item in productTags"
          :key="item.id"
          @click="queryForCategories(item.category, $route.params.id)"
          :class="[
            $route.query.category === item.category
              ? 'border-b-4 border-gray-800 font-semibold '
              : 'hover:bg-gray-700/10 border font-medium',
            'px-2 py-1 text-sm  transition ',
          ]"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>
