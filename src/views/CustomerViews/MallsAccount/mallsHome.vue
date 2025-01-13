<script setup>
import { ref, onMounted, computed } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import { products, mallsAccount, getProducts, useMallsAccount } from "@/store";
import ProductLoading from "@/components/ProductLoading.vue";
import ErrorMessage from "@/components/AlertMessage.vue";

const isLoading = ref(true);
const error = ref(null);

// Group malls
const groupedMalls = computed(() => {
  const groups = mallsAccount.value.reduce((acc, mall) => {
    if (!acc[mall.mallType]) {
      acc[mall.mallType] = [];
    }
    acc[mall.mallType].push({
      ...mall,
      mallProducts: products.value.filter(
        (product) => product.mallId === mall.userId
      ),
    });
    return acc;
  }, {});

  return Object.entries(groups).map(([type, malls]) => ({
    type,
    malls,
  }));
});

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

onMounted(initializeData, console.table(groupedMalls.value));
</script>

<template>
  <div v-if="isLoading" class="text-center">
    <ProductLoading />
  </div>
  <ErrorMessage v-else-if="error" :err-message="error.message" />
  <div v-else>
    <div
      v-for="group in groupedMalls"
      :key="group.type"
      class="mb-6 p-4 bg-white border"
    >
      <h2 class="text-xl font-bold text-gray-800 uppercase">
        {{ group.type }}
      </h2>

      <div class="flex justify-start items-center gap-2">
        <div
          v-for="mall in group.malls"
          :key="mall.userId"
          class="mb-4 shadow rounded-full"
        >
          <div class="flex items-center">
            <router-link
              :to="{ name: 'mallStore', params: { id: mall.userId } }"
            >
              <img
                :src="mall.userPhotoURL"
                loading="lazy"
                :alt="`${mall.mallType} mall logo`"
                class="w-16 h-16 object-cover rounded-full"
              />
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex justify-start items-start gap-2 overflow-scroll">
        <div v-for="mall in group.malls" :key="mall.userId" class="mb-4">
          <div class="flex gap-2">
            <ProductCard
              :products="mall.mallProducts"
              :key="`products-${mall.userId}`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
