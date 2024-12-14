<script setup>
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";

const props = defineProps({
  products: Object,
  require: true,
});
const getStarIcons = (ratings) => {
  const fullStars = Math.floor(ratings);
  const halfStar = ratings % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return [
    ...Array(fullStars).fill("material-symbols-light:star"),
    ...Array(halfStar).fill("material-symbols-light:star-half"),
    ...Array(emptyStars).fill("material-symbols-light:star-outline"),
  ];
};
</script>

<template>
  <div
    v-for="item in products"
    :key="item.id"
    class="hover:bg-gray-700/10 transition"
  >
    <div
      class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
    >
      <img
        :src="item.image"
        alt=""
        class="object-center h-full w-full object-cover"
      />
      <div
        class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
      >
        <span>{{ item.discount }} % </span>
        <p>OFF</p>
      </div>
    </div>
    <div class="p-1">
      <div class="flex">
        <Icon
          v-for="(icon, index) in getStarIcons(item.ratings)"
          :key="index"
          :icon="icon"
          width="20"
          height="20"
        />
      </div>
      <h1 class="text-sm font-medium truncate whitespace-break-spaces max-w-32">
        {{ item.name }}
      </h1>
      <div class="flex justify-start gap-1 items-center">
        <p class="text-lg text-gray-800 font-bold">${{ item.price }}</p>
        <p class="text-xs text-gray-700 font-semibold">{{ item.sold }} Sold</p>
      </div>
    </div>
  </div>
</template>
