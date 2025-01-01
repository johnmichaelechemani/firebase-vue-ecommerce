<template>
  <div class="p-2 border bg-gray-800/5">
    <div class="flex justify-between items-center gap-4 mb-2">
      <div class="text-lg font-semibold flex justify-start gap-1 items-center">
        Flash sale
        <span class="text-xs bg-gray-800 text-white px-1">Mall</span>
      </div>

      <div class="flex text-xs font-semibold justify-start items-center gap-1">
        <div class="bg-gray-800 text-white px-1 w-6 text-center">
          {{ props.hours }}
        </div>
        :
        <div class="bg-gray-800 text-white px-1 w-6 text-center">
          {{ props.minutes }}
        </div>
        :
        <div class="bg-gray-800 text-white px-1 w-6 text-center">
          {{ props.seconds }}
        </div>
      </div>
    </div>
    <div class="flex overflow-y-scroll gap-2 no-scrollbar">
      <div v-for="item in props.saleProducts" :key="item.id">
        <div class="size-20 bg-gray-700/50 relative">
          <img
            :src="item.image"
            alt=""
            class="w-full h-full object-cover object-center"
          />
          <div
            class="absolute flex bottom-0 left-0 text-xs bg-gray-800 text-white px-0.5 py-0.5"
          >
            <Icon
              icon="material-symbols-light:arrow-cool-down"
              width="16"
              height="16"
            />
            {{ item.discount }}%
          </div>
        </div>
        <div class="text-sm font-bold">${{ formatPrice(item.price) }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { formatPrice } from "@/scripts/composables";
import { Icon } from "@iconify/vue";
const props = defineProps({
  hours: String,
  minutes: String,
  seconds: String,
  saleProducts: Object,
});
</script>
