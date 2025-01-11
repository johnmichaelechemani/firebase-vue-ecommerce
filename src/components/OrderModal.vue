<script setup>
import { Transition, defineEmits, ref, computed, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
import { formatPrice, incerment, decrement } from "@/scripts/composables";
import { userData, userBalance, getBalance } from "@/store";
import { deleteItems } from "@/scripts/firebaseDeleteApi.js";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  increment,
  doc,
} from "firebase/firestore";
import ErrorMessage from "./AlertMessage.vue";
const props = defineProps({
  isShowModal: Boolean,
  product: Array,
});
const db = getFirestore();
const productCollection = collection(db, "products");
const userCollection = collection(db, "users");
const quantity = ref(1);
const selectedPaymentMethod = ref(null);
const paymentErrMessage = ref("");
const totalPrice = computed(() => {
  if (!props.product || props.product.length === 0) return 0;

  return props.product.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
});

const emit = defineEmits(["closeModal"]);

const showModal = () => {
  emit("closeModal");
  props.product.value = null;
  quantity.value = 1;
};

const paymentMethods = [
  {
    id: "cod",
    name: "Cash on Delivery",
    icon: "mdi:cash-on-delivery",
  },
  {
    id: "jmpay",
    name: "JmPay",
    icon: "material-symbols-light:credit-card",
  },
  {
    id: "gcash",
    name: "GCASH",
    icon: "arcticons:gcash",
  },
];

const getErrors = () => {
  if (!selectedPaymentMethod.value) {
    paymentErrMessage.value = "Please select a payment method";
    setTimeout(() => {
      paymentErrMessage.value = "";
    }, 2000);
    return false;
  }
  if (!props.product || props.product.length === 0) {
    paymentErrMessage.value = "No products to purchase.";
    setTimeout(() => {
      paymentErrMessage.value = "";
    }, 2000);
    return false;
  }
  if (
    totalPrice.value > userBalance.value &&
    selectedPaymentMethod.value === "jmpay"
  ) {
    paymentErrMessage.value = "Insufficient balance";
    setTimeout(() => {
      paymentErrMessage.value = "";
    }, 2000);
    return false;
  }
  return true;
};

const placeOrder = async () => {
  if (!getErrors()) return;
  try {
    const productPromises = props.product.map(async (item) => {
      const productDoc = doc(productCollection, item.id);
      const userDoc = doc(userCollection, userData.value.userId);
      await addDoc(collection(db, `purchase/${userData.value.userId}/items`), {
        productId: item.id,
        userId: userData.value.userId,
        mallId: item.mallId,
        paymentMethod: selectedPaymentMethod.value,
        status: "pay",
        purchaseDate: new Date(),
        name: item.name,
        price: item.price,
        totalPrice: item.price * item.quantity,
        quantity: item.quantity,
        store: item.store,
        image: item.image,
        address: {
          name: userData.value.userName,
          phone: "(+63)90******89",
          location:
            "4d, Legazpi Apartments, Saint Paris Street, Legazpi, Albay, Philippines",
        },
      });
      deleteItems("carts", item.cartItemId);

      if (selectedPaymentMethod.value === "jmpay") {
        await updateDoc(userDoc, {
          jmPay: increment(-totalPrice.value),
        });
      }

      await updateDoc(productDoc, {
        inventory: increment(-item.quantity),
      });
    });

    await Promise.all(productPromises);
    emit("closeModal");
    props.product = [];
    selectedPaymentMethod.value = null;
    quantity.value = 1;
    paymentErrMessage.value = "";
  } catch (error) {
    console.error("Error placing order:", error);
    paymentErrMessage.value =
      "An error occurred while placing the order. Please try again.";
    setTimeout(() => {
      paymentErrMessage.value = "";
    }, 2000);
  }
};

onMounted(async () => {
  try {
    await getBalance();
  } catch (e) {
    console.error(e);
  }
});
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
          <div class="bg-gray-700/5 p-2 shadow">
            <div
              class="text-sm font-semibold gap-2 flex justify-between items-center"
            >
              <div
                class="text-xs font-semibold flex justify-start items-center"
              >
                <Icon
                  icon="material-symbols-light:location-on-outline"
                  width="24"
                  height="24"
                />{{ userData.userName }} (+63)90******89
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
          <div class="max-h-52 overflow-y-scroll">
            <div v-for="item in product" :key="item.id">
              <div
                class="text-sm font-semibold flex mt-2 justify-between items-center"
              >
                <router-link
                  :to="{ name: 'mallStore', params: { id: item.mallId } }"
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
                  class="sm:size-20 sm:min-w-20 min-w-16 size-16 bg-gray-700/10 border-gray-700/20 border relative"
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
                  class="flex gap-1 line-through text-gray-600 px-1 text-xs font-semibold justify-start items-center"
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
          </div>

          <div>
            <div class="p-2 border">
              <div class="flex justify-start">
                <div class="flex flex-wrap">
                  <div
                    class="text-xs font-semibold bg-gray-800 text-gray-300 px-2 flex justify-start items-center flex-wrap gap-1"
                  >
                    JMPAY BALANCE:
                    <p class="text-sm font-bold text-green-500">
                      ${{ formatPrice(userBalance) }}
                    </p>
                  </div>
                </div>
              </div>
              <p class="text-sm font-semibold pb-2">Payment method</p>
              <ErrorMessage color="red" :message="paymentErrMessage" />

              <div
                v-for="method in paymentMethods"
                :key="method.id"
                class="flex justify-between border px-2 py-1 mb-1"
              >
                <div
                  class="text-xs flex text-gray-700 font-semibold justify-start items-center gap-1"
                >
                  <Icon :icon="method.icon" width="20" height="20" />
                  {{ method.name }}
                </div>
                <input
                  type="radio"
                  :value="method.id"
                  v-model="selectedPaymentMethod"
                  class="accent-gray-800 text-gray-800"
                />
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
                @click="placeOrder"
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
