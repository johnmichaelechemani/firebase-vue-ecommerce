<script setup>
import { ref, onMounted, computed } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import { products, mallsAccount, getProducts, useMallsAccount } from "@/store";
import ProductLoading from "@/components/ProductLoading.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

// State Management
const isLoading = ref(true);
const error = ref(null);

// Computed Properties for Better Performance
const fashionMalls = computed(() =>
  mallsAccount.value.filter((mall) => mall.mallType === "fashion")
);

const electronicMalls = computed(() =>
  mallsAccount.value.filter((mall) => mall.mallType === "electronics")
);

const categorizedMalls = computed(() => {
  const allMalls = [...fashionMalls.value, ...electronicMalls.value];

  return allMalls.map((mall) => ({
    ...mall,
    mallProducts: products.value.filter(
      (product) => product.mallId === mall.userId
    ),
  }));
});

// Async Data Fetching with Error Handling
async function initializeData() {
  try {
    isLoading.value = true;
    await useMallsAccount();
    getProducts();
  } catch (fetchError) {
    error.value = fetchError;
    console.error("Data fetching failed:", fetchError);
  } finally {
    isLoading.value = false;
  }
}

onMounted(initializeData);
</script>

<template>
  <div v-if="isLoading" class="text-center">
    <ProductLoading />
  </div>
  <ErrorMessage v-else-if="error" :err-message="error.message" />
  <div v-else>
    <div
      v-for="mall in categorizedMalls"
      :key="mall.id"
      class="mb-6 p-4 bg-white border"
    >
      <h2 class="text-xl font-bold text-gray-800 uppercase">
        {{ mall.mallType }}
      </h2>
      <div class="flex items-center mb-4">
        <img
          :src="mall.image"
          :alt="`${mall.mallType} mall logo`"
          class="w-16 h-16 object-cover mr-4"
        />
      </div>

      <div class="overflow-x-auto flex gap-2">
        <ProductCard
          :products="mall.mallProducts"
          :key="`products-${mall.id}`"
        />
      </div>
    </div>
  </div>
</template>
