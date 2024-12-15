<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import Shoes from "../assets/dummyImages/shoes.jpg";
const router = useRouter();
const route = useRoute();
const queryForStat = (query) => {
  router.push({
    path: "/purchase",
    query: { status: query },
  });
};
const purchaseProducts = ref([
  {
    id: 1,
    name: "Shoes ni Mike",
    store: "Mike Store",
    quantity: Math.floor(Math.random() * 5) + 1,
    category: "shoes",
    status: "pay",
    price: Math.floor(Math.random() * 500) + 50,
    image: Shoes,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 50),
    sold: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 2,
    name: "Shoes ni Michael",
    store: "Mike Store",
    quantity: Math.floor(Math.random() * 5) + 1,
    category: "shoes",
    status: "ship",
    price: Math.floor(Math.random() * 500) + 50,
    image: Shoes,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 50),
    sold: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 2,
    name: "Shoes ni Mic",
    store: "Mike Store",
    quantity: Math.floor(Math.random() * 5) + 1,
    category: "shoes",
    status: "recieve",
    price: Math.floor(Math.random() * 500) + 50,
    image: Shoes,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 50),
    sold: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 2,
    name: "Shoes ni John",
    store: "Mike Store",
    quantity: Math.floor(Math.random() * 5) + 1,
    category: "shoes",
    status: "rate",
    price: Math.floor(Math.random() * 500) + 50,
    image: Shoes,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 50),
    sold: Math.floor(Math.random() * 1000) + 100,
  },
]);

const purchasesStatus = ref([
  {
    id: 1,
    name: "To Pay",
    status: "pay",
    icon: "material-symbols-light:credit-card-outline",
  },
  {
    id: 2,
    name: "To Ship",
    status: "ship",
    icon: "mdi:ship-wheel",
  },
  {
    id: 3,
    name: "To Recieve",
    status: "recieve",
    icon: "mdi:target-account",
  },
  {
    id: 4,
    name: "To Rate",
    status: "rate",
    icon: "mdi:star-outline",
  },
  {
    id: 5,
    name: "Completed",
    status: "completed",
    icon: "mdi:check",
  },
  {
    id: 6,
    name: "Cancelled",
    status: "cancelled",
    icon: "mdi:cancel-box-outline",
  },
]);

const filteredStats = computed(() => {
  const stat = route.query.status;
  if (stat) {
    return purchaseProducts.value.filter((status) => status.status === stat);
  }
  return purchaseProducts.value;
});
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="p-2">
      <p class="text-sm font-semibold">My Purchase</p>
      <div class="mt-4 flex no-scrollbar overflow-x-auto gap-8">
        <div
          class="place-items-center"
          v-for="item in purchasesStatus"
          :key="item.id"
          @click="queryForStat(item.status)"
        >
          <div
            :class="[
              $route.query.status === item.status
                ? 'bg-gray-800 text-white'
                : 'hover:bg-gray-700/10 border',
              'p-2 transition ',
            ]"
          >
            <Icon :icon="item.icon" width="24" height="24" />
          </div>
          <p class="text-sm my-2 text-center font-semibold">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <p class="text-sm font-semibold p-2 capitalize">
      {{ Object.keys($route.query).length === 0 ? "All" : route.query.status }}
    </p>
    <div class="mx-2 flex flex-wrap gap-2">
      <div
        v-if="filteredStats"
        v-for="item in filteredStats"
        :key="item.id"
        class="shadow-sm border p-2 w-full sm:max-w-72"
      >
        <div class="flex justify-between items-center">
          <div class="text-sm font-semibold flex justify-between items-center">
            <span
              ><Icon
                icon="material-symbols-light:store"
                width="24"
                height="24" /></span
            >{{ item.store }}
          </div>
          <div class="text-xs shadow-sm font-medium border px-2 capitalize">
            To {{ item.status }}
          </div>
        </div>

        <div class="flex justify-start items-start gap-2">
          <div
            class="sm:size-20 size-10 bg-gray-700/10 border-gray-700/20 border relative"
          >
            <img
              :src="item.image"
              loading="lazy"
              alt=""
              class="object-center h-full w-full object-cover"
            />
          </div>
          <div>
            <p class="text-sm font-semibold">{{ item.name }}</p>
            <div class="flex justify-start items-center gap-2">
              <p class="text-xs font-medium">${{ item.price }}</p>
            </div>

            <div class="font-semibold flex justify-start items-center gap-2">
              <span class="font-semibold text-xs">x{{ item.quantity }} </span>
            </div>
            <div class="font-semibold flex justify-start items-center gap-2">
              <span class="font-semibold text-xs"
                >Total {{ item.quantity }} Item :
                <span class="text-sm font-bold"
                  >${{ item.quantity * item.price }}</span
                >
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="filteredStats.length === 0"
        class="text-sm font-semibold flex justify-start items-center gap-2"
      >
        <span class="p-2 border shadow-sm"
          ><Icon icon="mdi:cup-empty" width="24" height="24" /></span
        >No Orders Yet
      </div>
    </div>
  </div>
</template>
