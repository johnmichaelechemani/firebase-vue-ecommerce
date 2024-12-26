<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { products, mallsAccount, useMallsAccount, getProducts } from "@/store";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { Icon } from "@iconify/vue";
import { isLoggedIn } from "@/store";

const router = useRouter();
const route = useRoute();
const activeTab = ref("shop");
const isPriceUp = ref(true);
const filteredProducts = ref(products);

const getAutoProducts = () => {
  try {
    products.value = products.value.filter(
      (product) => product.mallId === route.params.id
    );
  } catch (error) {
    console.error("Error fetching mall products:", error);
    products.value = [];
  }
};

const queryForCategories = (query, id) => {
  router.push({
    path: `/malls/${id}/`,
    query: { category: query },
  });
};
const currentMall = computed(() => {
  const mallId = route.params.id;
  return mallsAccount.value.find((mall) => mall.userId === mallId);
});

const mallData = computed(() => {
  return (
    currentMall.value || {
      userName: "Unknown Mall",
      image: null,
      bgImage: null,
    }
  );
});

const filterProductsByPrice = () => {
  isPriceUp.value = !isPriceUp.value;
  filteredProducts.value = products.value.sort((a, b) => {
    return isPriceUp.value ? b.price - a.price : a.price - b.price;
  });
};
const handlePriceFilter = (id) => {
  queryForCategories("price", id);
  filterProductsByPrice();
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
    icon: true,
  },
]);

onMounted(async () => {
  await useMallsAccount();
  getProducts();
  getAutoProducts();
});
</script>

<template>
  <div class="">
    <div class="relative sm:mb-14 mb-5">
      <div class="w-full h-32 sm:h-52 bg-gray-700/50">
        <img
          v-if="mallData.image"
          :src="mallData.bgImage"
          loading="lazy"
          alt="Background Image"
          class="w-full h-full object-cover object-center"
        />
      </div>
      <div
        class="sm:size-20 size-10 border-2 border-gray-700 bg-gray-700/90 absolute sm:-bottom-10 -bottom-5 left-2 shadow-xl"
      >
        <img
          v-if="mallData.image"
          :src="mallData.image"
          alt="profile"
          loading="lazy"
          class="w-full h-full object-cover object-center"
        />
      </div>
    </div>
    <div class="mb-3 flex justify-start items-center gap-2">
      <h1 class="font-semibold text-lg drop-shadow-lg">
        {{ mallData.userName }}
      </h1>
      <router-link
        :to="{ name: 'mallsChat', params: { id: mallData.mallId } }"
        class="p-1 shadow border hover:bg-gray-500/10"
        v-if="isLoggedIn"
      >
        <Icon
          icon="material-symbols-light:chat-outline"
          width="24"
          height="24"
        />
      </router-link>
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
        <div>
          <div class="flex gap-2">
            <button
              v-for="item in productTags"
              :key="item.id"
              @click="
                item.category === 'price'
                  ? handlePriceFilter($route.params.id)
                  : queryForCategories(item.category, $route.params.id)
              "
              :class="[
                $route.query.category === item.category
                  ? 'border-b-4 border-gray-800 font-semibold '
                  : 'hover:bg-gray-700/10 border font-medium',
                'px-2 py-1 text-sm flex justify-start items-center gap-1 transition ',
              ]"
            >
              {{ item.name }}
              <div v-if="item.icon">
                <Icon
                  v-if="isPriceUp"
                  icon="mdi-light:arrow-up"
                  width="16"
                  height="16"
                />
                <Icon
                  v-else
                  icon="mdi-light:arrow-down"
                  width="16"
                  height="16"
                />
              </div>
            </button>
          </div>

          <div class="flex flex-wrap gap-1 my-5">
            <ProductCard :products="filteredProducts" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
