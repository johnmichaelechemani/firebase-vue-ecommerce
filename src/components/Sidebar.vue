<template>
  <aside
    class="w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"
  >
    <div>
      <div class="w-full h-28 bg-gray-700/20">
        <img
          :src="Shop"
          alt=""
          loading="lazy"
          class="w-full h-full object-center object-cover"
        />
      </div>
    </div>
    <div
      class="my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"
    >
      <p
        class="text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"
      >
        MENU
      </p>
      <RouterLink to="/">
        <div
          class="flex sm:justify-start my-2 justify-center items-center gap-1  transition"
        >
          <div
            :class="[
              $route.path === '/' ? 'bg-gray-800 text-white' : '',
              'place-items-center p-1 border shadow',
            ]"
          >
            <Icon
              icon="material-symbols-light:home-outline"
              width="30"
              height="30"
            />
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">HOME</p>
        </div>
      </RouterLink>
      <RouterLink to="/malls">
        <div
          class="flex sm:justify-start justify-center my-2 items-center gap-1  transition"
        >
          <div
            :class="[
              $route.path === '/malls' ? 'bg-gray-800 text-white' : '',
              'place-items-center p-1 border shadow ',
            ]"
          >
            <Icon
              icon="material-symbols-light:shopping-basket-outline"
              width="30"
              height="30"
            />
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">
            MALLS
          </p>
        </div>
      </RouterLink>

      <RouterLink to="/purchase">
        <div
          class="flex sm:justify-start justify-center my-1 items-center gap-1  transition"
        >
          <div
            :class="[
              $route.path === '/purchase' ? 'bg-gray-800 text-white ' : '',
              'place-items-center p-1 border shadow relative',
            ]"
          >
            <Icon
              icon="material-symbols-light:credit-card-outline"
              width="30"
              height="30"
            />
            <div
              v-if="purchaseProducts.length !== 0"
              class="absolute -top-1 -right-1 bg-gray-800 text-xs text-white font-semibold min-w-6 text-center p-0.5 rounded-full border"
            >
              {{ purchaseProducts.length }}
            </div>
          </div>
          <p class="text-sm font-semibold text-gray-700 hidden sm:flex">
            PURCHASE
          </p>
        </div>
      </RouterLink>
    </div>
  </aside>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { purchaseProducts, getPurchaseProducts } from "@/store";
import { onMounted } from "vue";
import Shop from "../assets/dummyImages/shop.jpg";

onMounted(() => {
  getPurchaseProducts();
});
</script>
