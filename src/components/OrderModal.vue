<script setup>
import { Transition, defineEmits, ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
import { formatPrice } from "@/scripts/composables";
const props = defineProps({
  isShowModal: Boolean,
  product: Array,
});
const quantity = ref(1);
const totalPrice = computed(() => {
  if (!props.product || props.product.length === 0) return 0;

  return props.product.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
});
const emit = defineEmits(["closeModal"]);
const incerment = (item) => {
  if (item.quantity < item.inventory) {
    item.quantity += 1;
  }
};

// Quantity decrement method
const decrement = (item) => {
  if (item.quantity > 1) {
    item.quantity -= 1;
  }
};
const showModal = () => {
  emit("closeModal");
  props.product.value = null;
  quantity.value = 1;
};
</script>

<template>
  <transition>
    <div
      v-if="props.isShowModal"
      class="fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"
    >
      <div class="relative flex justify-center items-center h-full">
        <div class="bg-white p-2 relative max-w-80">
          <div class="absolute top-0 right-0">
            <button @click="showModal">
              <Icon
                icon="material-symbols-light:close-small-outline"
                width="24"
                height="24"
              />
            </button>
          </div>
          <p class="text-sm font-semibold py-3">Order Summary</p>
          <div class="bg-gray-700/5 p-2">
            <div
              class="text-sm font-semibold flex justify-between items-center"
            >
              <div
                class="text-sm font-semibold flex justify-start items-center"
              >
                <Icon
                  icon="material-symbols-light:location-on-outline"
                  width="24"
                  height="24"
                />John Michael (+63)90******89
              </div>
              <Icon icon="weui:arrow-outlined" width="6" height="12" />
            </div>
            <p class="text-xs text-gray-600 pl-6">
              4d, Legazpi Apartments, Saint Paris Street
            </p>
            <p class="text-xs text-gray-600 pl-6">
              Legazpi, Albay, Philippines
            </p>
          </div>
          <div v-for="item in product" :key="item.id">
            <div
              class="text-sm font-semibold flex mt-2 justify-between items-center"
            >
              <router-link
                :to="{ name: 'mallStore', params: { id: '435804584' } }"
                class="flex justify-start items-center"
              >
                <span>
                  <Icon
                    icon="material-symbols-light:store"
                    width="24"
                    height="24" /></span
                >{{ item.store }}
                <Icon
                  icon="material-symbols-light:double-arrow"
                  width="20"
                  height="20"
                />
              </router-link>
            </div>
            <div class="flex justify-start items-start gap-2">
              <div
                class="sm:size-20 size-16 bg-gray-700/10 border-gray-700/20 border relative"
              >
                <img
                  :src="item.image"
                  loading="lazy"
                  alt=""
                  class="object-center h-full w-full object-cover"
                />
              </div>
              <div class="w-full">
                <p class="text-sm font-semibold">{{ item.name }}</p>
                <div class="flex justify-start items-center gap-2">
                  <p class="text-xs font-medium">
                    $ {{ formatPrice(item.price) }}
                  </p>
                </div>

                <div class="flex justify-end items-center mt-4">
                  <button
                    @click="decrement(item)"
                    class="hover:bg-gray-700/20 text-xs border px-2 transition"
                  >
                    -
                  </button>
                  <div class="px-3 border text-xs">{{ item.quantity }}</div>
                  <button
                    @click="incerment(item)"
                    class="hover:bg-gray-700/20 text-xs border px-2 transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center mt-2">
              <p class="text-xs">Standard shipping</p>
              <div
                class="flex gap-1 bg-gray-800 text-white px-1 text-xs font-semibold justify-start items-center"
              >
                <Icon
                  icon="material-symbols-light:delivery-truck-bolt-outline"
                  width="20"
                  height="20"
                />Free
              </div>
            </div>
            <div class="flex justify-between items-center my-1">
              <div class="text-xs flex justify-start items-center gap-0.5">
                <Icon
                  icon="material-symbols-light:delivery-truck-bolt-outline"
                  width="16"
                  height="16"
                />Shipping voucher applied
              </div>
              <div
                class="flex gap-1 text-gray-600 px-1 text-xs font-semibold justify-start items-center"
              >
                $ 39.00
              </div>
            </div>
            <div class="flex justify-end">
              <div class="flex flex-wrap">
                <div
                  class="text-xs flex justify-start items-center flex-wrap gap-1"
                >
                  {{ item.quantity }} Item, Total:
                  <p class="text-sm font-bold">
                    $ {{ formatPrice(item.quantity * item.price) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="p-2 border my-2">
              <p class="text-sm font-semibold pb-2">Payment method</p>
              <div class="flex justify-between border px-2 py-1 mb-1">
                <div
                  class="text-xs flex text-gray-700 font-semibold justify-start items-center gap-1"
                >
                  <Icon
                    icon="mdi:cash-on-delivery"
                    width="20"
                    height="20"
                  />Cash on Delivery
                </div>
                <input type="radio" class="accent-gray-800 text-gray-800" />
              </div>
              <div class="flex justify-between border px-2 py-1">
                <div
                  class="text-xs flex text-gray-700 font-semibold justify-start items-center gap-1"
                >
                  <Icon icon="arcticons:gcash" width="20" height="20" />GCASH
                </div>
                <input type="radio" class="accent-gray-800 text-gray-800" />
              </div>
            </div>
            <div class="w-full mt-2 border-t">
              <div
                class="flex justify-between text-sm font-semibold items-center"
              >
                Total
                <p class="text-lg text-gray-800">
                  $ {{ formatPrice(totalPrice) }}
                </p>
              </div>
              <button
                class="text-sm w-full py-2 font-semibold text-white bg-gray-800"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
