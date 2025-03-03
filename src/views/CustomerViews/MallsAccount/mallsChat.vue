<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import { mallsAccount, useMallsAccount, userData } from "@/store";
import { chatFunctions, messages } from "@/scripts/chatFunctions";
import { Time } from "@/scripts/composables";
import UserLoading from "@/components/UserLoading.vue";
const { message, sendMessage } = chatFunctions();
const route = useRoute();
const mallId = ref(route.params.id);
const userId = userData.value.userId;
const userPhoto = userData.value.userPhotoURL;
const isMallLoading = ref(false);
watch(
  () => route.params.id,
  (newId) => {
    mallId.value = newId;
  }
);
const currentMall = computed(() => {
  return mallsAccount.value.find((mall) => mall.userId === mallId.value);
});
const mallData = computed(() => {
  return currentMall.value;
});

onMounted(async () => {
  isMallLoading.value = true;
  try {
    await useMallsAccount();
  } catch (e) {
    console.log(e);
  } finally {
    isMallLoading.value = false;
  }
});
</script>

<template>
  <div
    class="bg-gray-400/5 border relative shadow-xl overflow-y-scroll no-scrollbar"
  >
    <div>
      <div class="flex gap-2 justify-start items-center shadow-sm p-2 border-b">
        <div v-if="!isMallLoading" class="flex gap-2 items-center">
          <div
            class="flex justify-center rounded-full bg-gray-700/10 border size-8 items-center"
          >
            <img
              v-if="mallData && mallData.userPhotoURL"
              :src="mallData.userPhotoURL"
              alt="mall profile"
              loading="lazy"
              class="w-full h-full object-center rounded-full object-cover"
            />
          </div>
          <div>
            <p class="text-sm font-semibold capitalize" v-if="mallData">
              {{ mallData.userName }}
            </p>
          </div>
        </div>
        <div v-else class="flex justify-start gap-2 w-full items-center">
          <div class="size-10 animate-pulse bg-gray-300 rounded-full"></div>
          <div class="h-4 w-1/4 animate-pulse bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <div class="h-[calc(100vh-10rem)] overflow-y-auto pb-14 mx-2 py-2">
        <div
          v-if="!isMallLoading"
          v-for="(message, index) in messages"
          :key="index"
        >
          <div class="my-2" v-if="message.senderId !== userId">
            <div
              class="flex justify-center items-center text-[9px] text-gray-500"
            >
              {{ Time(message.timestamp) }}
            </div>
            <div
              class="flex justify-start items-end font-medium text-gray-800 gap-2"
            >
              <div class="size-6 bg-gray-800 rounded-full">
                <img
                  v-if="mallData && mallData.userPhotoURL"
                  :src="mallData.userPhotoURL"
                  loading="lazy"
                  alt=""
                  class="rounded-full h-full w-full object-cover object-center"
                />
              </div>
              <div class="sm:max-w-[calc(100%-10rem)] max-w-[calc(100%-5rem)]">
                <div class="pl-3 pr-2 pb-1 pt-2 text-sm bg-gray-700/10">
                  {{ message.message }}
                </div>
                <div
                  class="flex justify-start items-center text-xs font-semibold text-gray-500"
                >
                  Delivered
                </div>
              </div>
            </div>
          </div>
          <div class="my-2" v-else>
            <div
              class="flex justify-center items-center text-[9px] text-gray-500"
            >
              {{ Time(message.timestamp) }}
            </div>
            <div
              class="flex justify-end items-end font-medium text-gray-800 gap-2"
            >
              <div class="sm:max-w-[calc(100%-10rem)] max-w-[calc(100%-5rem)]">
                <div class="pl-3 pr-2 py-1.5 text-sm bg-gray-700/10">
                  {{ message.message }}
                </div>
                <div
                  class="flex justify-end items-center text-xs font-semibold text-gray-500"
                >
                  Delivered
                </div>
              </div>
              <div class="size-6 bg-gray-800 rounded-full">
                <img
                  v-if="userPhoto"
                  :src="userPhoto"
                  loading="lazy"
                  alt=""
                  class="rounded-full h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-else class="max-w-52">
          <UserLoading />
        </div>
      </div>
      <div class="absolute bottom-0 left-0 z-10 w-full bg-gray-50">
        <div
          class="relative shadow-xl p-1 flex justify-between items-center border-b-4 border-b-gray-800 border"
        >
          <input
            type="text"
            v-model="message"
            class="w-full py-1 px-3 outline-none bg-transparent placeholder:text-sm"
            placeholder="Type a message"
          />
          <button
            @click="sendMessage(route.params.id)"
            :disabled="message.trim() === ''"
            :class="
              message.trim() === '' ? 'cursor-not-allowed ' : 'cursor-pointer'
            "
            class="py-1 pl-2 pr-1 hover:bg-gray-800 hover:text-white transition border"
          >
            <Icon
              icon="material-symbols-light:send-rounded"
              width="32"
              height="32"
            />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
