<template>
  <div class="p-2 border bg-gray-800/5">
    <div class="flex justify-between items-center gap-4 mb-2">
      <div class="text-lg font-semibold flex justify-start gap-1 items-center">
        Flash sale
        <span class="text-xs bg-gray-800 text-white px-1">Mall</span>
      </div>

      <div class="flex text-xs font-semibold justify-start items-center gap-1">
        <div class="bg-gray-800 text-white px-1 w-6 text-center">
          {{ hours }}
        </div>
        :
        <div class="bg-gray-800 text-white px-1 w-6 text-center">
          {{ minutes }}
        </div>
        :
        <div class="bg-gray-800 text-white px-1 w-6 text-center">
          {{ seconds }}
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
import { defineProps, ref, onMounted, onUnmounted } from "vue";
import { formatPrice } from "@/scripts/composables";
import { Icon } from "@iconify/vue";
const props = defineProps({
  saleProducts: Object,
});

const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");
let countdownInterval;

const calculateCountdown = () => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 2);
  targetDate.setMinutes(0);
  targetDate.setSeconds(0);
  const countdownInterval = setInterval(() => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    if (difference < 0) {
      clearInterval(countdownInterval);
      hours.value = "00";
      minutes.value = "00";
      seconds.value = "00";
      return;
    }
    const calculatedHours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const calculatedMinutes = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const calculatedSeconds = Math.floor((difference % (1000 * 60)) / 1000);
    hours.value = calculatedHours.toString().padStart(2, "0");
    minutes.value = calculatedMinutes.toString().padStart(2, "0");
    seconds.value = calculatedSeconds.toString().padStart(2, "0");
  }, 1000);

  return countdownInterval;
};
onMounted(() => {
  countdownInterval = calculateCountdown();
});
onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});
</script>
