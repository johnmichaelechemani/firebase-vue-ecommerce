<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { purchaseProducts, getPurchaseProducts, userData } from "@/store";
import { formatPrice, Time } from "@/scripts/composables";
import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";

const router = useRouter();
const route = useRoute();
const queryForStat = (query) => {
  router.push({
    path: "/purchase",
    query: { status: query },
  });
};

const firestore = getFirestore();
const userCollection = collection(firestore, "users");
const purchaseCollection = collection(
  firestore,
  "purchase",
  userData.value.userId,
  "items"
);
const productCollection = collection(firestore, "products");

const purchasesStatus = ref([
  {
    id: 1,
    name: "To Pay",
    status: "pay",
    icon: "mdi:credit-card-chip-outline",
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
const getButtonConfig = (status, item) => {
  const buttonMap = {
    completed: {
      text: "Buy Again",
      action: () => console.log("Buy Again Clicked"),
    },
    pay: { text: "Cancel", action: () => cancelOrder(item) },
    ship: {
      text: "Track Order",
      action: () => console.log("Track Order Clicked"),
    },
    rate: {
      text: "Rate Order",
      action: () => console.log("Rate Order Clicked"),
    },
    recieve: {
      text: "View Order",
      action: () => console.log("View Order Clicked"),
    },
  };
  return buttonMap[status] || null;
};

const cancelOrder = async (item) => {
  const purchaseDoc = doc(purchaseCollection, item.id);
  const productDoc = doc(productCollection, item.productId);
  const userDoc = doc(userCollection, userData.value.userId);
  await updateDoc(purchaseDoc, {
    status: "cancelled",
  });
  if (item.paymentMethod === "jmpay") {
    await updateDoc(userDoc, {
      jmPay: increment(item.totalPrice),
    });
  }

  await updateDoc(productDoc, {
    inventory: increment(item.quantity),
  });
};

onMounted(() => {
  getPurchaseProducts();
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
          <p class="text-sm mt-2 text-center font-semibold">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <p class="text-sm font-semibold p-2 capitalize">
      {{ Object.keys($route.query).length === 0 ? "All" : route.query.status }}
    </p>
    <div class="overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)] pb-52">
      <div class="mx-2 flex flex-wrap gap-2">
        <div
          v-if="filteredStats"
          v-for="item in filteredStats"
          :key="item.id"
          class="shadow-sm border p-2 w-full sm:max-w-72"
        >
          <div class="text-xs font-semibold text-gray-600">
            {{ Time(item.purchaseDate) }}
          </div>
          <div class="flex justify-between items-center">
            <div
              class="text-sm font-semibold flex justify-between items-center"
            >
              <router-link
                :to="{ name: 'mallStore', params: { id: item.mallId } }"
                class="flex justify-start items-center gap-1 uppercase"
              >
                <span>
                  <Icon
                    icon="material-symbols-light:store"
                    width="24"
                    height="24" /></span
                >{{ item.store }}
                <div
                  class="border px-2 bg-gray-700/5 text-xs font-semibold rounded-sm"
                >
                  Visit
                </div>
              </router-link>
            </div>
            <div
              class="text-xs shadow-sm font-medium border border-gray-800/50 px-2 capitalize"
            >
              {{ item.status }}
            </div>
          </div>

          <div class="flex justify-start items-start gap-2">
            <div
              class="max-w-16 sm:min-w-20 bg-gray-700/10 border-gray-700/20 border relative"
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
                <p
                  class="text-xs font-medium flex justify-start items-center gap-0.5"
                >
                  <Icon
                    icon="material-symbols-light:price-change-outline"
                    width="20"
                    height="20"
                  />
                  {{ formatPrice(item.price) }}
                </p>
              </div>

              <div class="font-semibold flex justify-start items-center gap-2">
                <div
                  class="font-semibold text-xs flex justify-start items-center gap-0.5"
                >
                  <Icon
                    icon="material-symbols-light:production-quantity-limits"
                    width="20"
                    height="20"
                  />{{ item.quantity }}
                </div>
              </div>
              <div class="font-medium flex justify-start items-center gap-2">
                <span
                  class="font-medium text-xs uppercase flex justify-start items-center gap-0.5"
                  ><Icon
                    icon="material-symbols-light:delivery-truck-bolt-outline"
                    width="20"
                    height="20"
                  />{{ item.paymentMethod }}
                </span>
              </div>
              <div class="flex flex-wrap">
                <div
                  class="font-semibold text-xs flex justify-start items-center flex-wrap gap-1"
                >
                  Total {{ item.quantity }} Item :
                  <p
                    class="text-sm font-bold px-2 py-0.5 bg-gray-800 text-white"
                  >
                    $ {{ formatPrice(item.totalPrice) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex justify-end mt-2"
            v-if="getButtonConfig(item.status)"
          >
            <button
              class="border text-sm border-gray-700/50 hover:bg-gray-800 transition hover:text-white font-semibold px-4 py-2"
              @click="getButtonConfig(item.status, item).action"
            >
              {{ getButtonConfig(item.status).text }}
            </button>
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
  </div>
</template>
