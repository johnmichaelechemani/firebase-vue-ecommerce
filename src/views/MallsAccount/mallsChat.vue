<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

const route = useRoute();
const mallId = ref(Number(route.params.id));

watch(
  () => route.params.id,
  (newId) => {
    mallId.value = Number(newId);
  }
);

const message = ref("");
const sendMessage = () => {
  console.log(message.value);
  message.value = "";
};
</script>

<template>
  <div
    class="bg-gray-400/5 border relative shadow-xl overflow-y-scroll no-scrollbar"
  >
    <div>
      <div class="flex gap-2 justify-start items-center shadow-sm p-2 border-b">
        <div
          class="flex justify-between bg-gray-700/20 size-8 items-center"
        ></div>
        <div><p class="text-sm font-semibold">Store ni Michael</p></div>
      </div>
      <div class="h-[calc(100vh-10rem)] mx-2 p-2">
        <div class="flex justify-start items-center">Reciever Message</div>
        <div>
          <div class="flex justify-center items-center">Tue 3, 10:30pm</div>
         <div class="flex justify-end items-end font-medium text-gray-800 gap-2">
          <div class="pl-3 pr-2 pb-1 pt-2 text-sm  bg-gray-700/10" >Sender Message</div>
          <div class="size-6 bg-gray-800"></div>
         </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full">
        <div
          class="relative shadow-xl p-1 flex justify-between items-center border"
        >
          <input
            type="text"
            v-model="message"
            class="w-full py-1 px-3 outline-none placeholder:text-sm"
            placeholder="Type a message"
          />
          <button
            @click="sendMessage"
            :disabled="!message.trim()"
            :class="!message.trim() ? 'cursor-not-allowed ' : 'cursor-pointer'"
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
