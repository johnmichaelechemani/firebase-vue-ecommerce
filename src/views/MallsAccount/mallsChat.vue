<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import { mallsAccount, useMallsAccount } from "@/store";
import { chatFunctions } from "@/scripts/chatFunctions";
const route = useRoute();
const mallId = ref(route.params.id);
const chatService = ref(null);

onMounted(async () => {
  chatService.value = await chatFunctions();
});

const message = ref("");

watch(
  () => route.params.id,
  (newId) => {
    mallId.value = newId;
  }
);

const handleSendMessage = async () => {
  if (chatService.value && message.value) {
    await chatService.value.sendMessage(message.value, mallId.value);
    message.value = "";
  }
};

const currentMall = computed(() => {
  return mallsAccount.value.find((mall) => mall.userId === mallId.value);
});

const mallData = computed(() => {
  return currentMall.value;
});

onMounted(async () => {
  await useMallsAccount();
});
</script>

<template>
  <div
    class="bg-gray-400/5 border relative shadow-xl overflow-y-scroll no-scrollbar"
  >
    <div>
      <div class="flex gap-2 justify-start items-center shadow-sm p-2 border-b">
        <div class="flex justify-between bg-gray-700/20 size-8 items-center">
          <img
            v-if="mallData && mallData.userPhotoURL"
            :src="mallData.userPhotoURL"
            alt="mall profile"
            class="w-full h-full object-center object-cover"
          />
        </div>
        <div>
          <p class="text-sm font-semibold capitalize" v-if="mallData">
            {{ mallData.userName }}
          </p>
        </div>
      </div>
      <div class="h-[calc(100vh-10rem)] overflow-y-auto pb-14 mx-2 py-2">
        <div class="my-2">
          <div
            class="flex justify-center items-center text-[9px] text-gray-500"
          >
            Tue 3, 10:30pm
          </div>

          <div
            class="flex justify-start items-end font-medium text-gray-800 gap-2"
          >
            <div class="size-6 bg-gray-800"></div>
            <div
              class="sm:max-w-[calc(100%-10rem)] max-w-[calc(100%-5rem)] min-w-32"
            >
              <div class="pl-3 pr-2 pb-1 pt-2 text-sm bg-gray-700/10">
                Reciever Message
              </div>
              <div
                class="flex justify-start items-center text-xs font-semibold text-gray-500"
              >
                Sending...
              </div>
            </div>
          </div>
        </div>
        <div class="my-2">
          <div
            class="flex justify-center items-center text-[9px] text-gray-500"
          >
            Tue 3, 10:30pm
          </div>
          <div
            class="flex justify-end items-end font-medium text-gray-800 gap-2"
          >
            <div
              class="sm:max-w-[calc(100%-10rem)] max-w-[calc(100%-5rem)] min-w-32"
            >
              <div class="pl-3 pr-2 pb-1 pt-2 text-sm bg-gray-700/10">
                Sender Message
              </div>
              <div
                class="flex justify-end items-center text-xs font-semibold text-gray-500"
              >
                Delivered
              </div>
            </div>
            <div class="size-6 bg-gray-800"></div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 z-10 w-full bg-gray-50">
        <div
          class="relative shadow-xl p-1 flex justify-between items-center border"
        >
          <input
            type="text"
            v-model="message"
            class="w-full py-1 px-3 outline-none bg-transparent placeholder:text-sm"
            placeholder="Type a message"
          />
          <button
            @click="handleSendMessage"
            :disabled="!message"
            :class="!message ? 'cursor-not-allowed ' : 'cursor-pointer'"
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
