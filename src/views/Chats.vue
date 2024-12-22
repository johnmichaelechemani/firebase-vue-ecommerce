<script setup>
import { Icon } from "@iconify/vue";
import { ref, watch, Transition, onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";
import { mallsAccount, useMallsAccount } from "@/store";
import { chatFunctions } from "@/scripts/chatFunctions";

const chatService = ref(null);
onMounted(async () => {
  chatService.value = chatFunctions();
});

const route = useRoute();
const isMenuToggled = ref(true);
const mallId = ref(route.params.id);

watch(
  () => route.params.id,
  (newId) => {
    mallId.value = newId;
  }
);

const handleLoadMessage = async (id) => {
  if (chatService.value) {
    await chatService.value.selectedMall(id);
  }
};

function toggleMenu() {
  isMenuToggled.value = !isMenuToggled.value;
}

onMounted(async () => {
  await useMallsAccount();
  if (route.params.id) {
    handleLoadMessage(route.params.id);
  }
});
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="p-2">
      <div class="text-sm font-semibold flex gap-1 justify-start items-center">
        <div
          @click="toggleMenu"
          class="p-1 hover:bg-gray-800/10 rounded-full cursor-pointer"
        >
          <Icon
            icon="material-symbols-light:menu-open-rounded"
            width="24"
            height="24"
          />
        </div>
        Chats
      </div>
      <div class="flex gap-4">
        <transition>
          <div
            v-if="isMenuToggled"
            class="my-2 bg-gray-400/5 border shadow-xl w-16 sm:w-72 overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)]"
          >
            <div v-for="mall in mallsAccount" :key="mall.userId">
              <router-link
                @click="handleLoadMessage(mall.userId)"
                :to="{ name: 'mallsChat', params: { id: mall.userId } }"
              >
                <div
                  :class="
                    mallId === mall.userId
                      ? 'border border-gray-800/50 shadow-xl p-1'
                      : 'hover:bg-gray-700/10 transition p-1'
                  "
                  class="flex gap-2 justify-center sm:justify-start items-center my-2 sm:mx-2"
                >
                  <div class="size-8 sm:size-10">
                    <img
                      v-if="mall.userPhotoURL"
                      :src="mall.userPhotoURL"
                      alt=""
                      class="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div class="hidden sm:block">
                    <p class="text-sm font-semibold capitalize">
                      {{ mall.userName }}
                    </p>
                    <p class="text-xs truncate font-medium max-w-32">
                      Hey, select any of your like!
                    </p>
                  </div>
                </div></router-link
              >
            </div>
          </div>
        </transition>

        <div class="my-2 border-gray-700/50 w-full">
          <RouterView v-if="mallId" />
          <div
            v-else
            class="bg-gray-400/5 border shadow-xl overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)] p-2"
          >
            <div class="text-sm font-semibold">Select Chat</div>
            <div class="font-semibold text-sm border p-2 my-2 text-gray-600">
              Nothings here!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
