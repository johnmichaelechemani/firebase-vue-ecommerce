<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Settings from "@/views/MallsViews/mallSettings.vue";
import { isLoggedIn, messages, notifications, userData } from "@/store";
import { useAuth } from "@/firebase.auth";

const { logoutAccount } = useAuth();
const openPanel = ref(null);

const showPanel = (panel) => {
  openPanel.value = openPanel.value === panel ? null : panel;
};

const logout = () => {
  logoutAccount();

  isLoggedIn.value = false;
  openPanel.value = null;
};
</script>
<template>
  <nav
    class="ml-20 sm:ml-72 border-b border-gray-800/50 z-50 bg-white fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"
  >
    <div
      class="relative flex justify-end sm:justify-between px-1 gap-1 items-center"
    >
      <div class="hidden sm:flex">
        <h1 class="font-extrabold text-lg text-gray-800 drop-shadow-md">
          Jm's Shops
        </h1>
      </div>

      <div class="flex justify-end items-center gap-1">
        <div v-if="isLoggedIn" class="flex justify-end items-center gap-1 m-2">
          <RouterLink to="/chats" @click.native="showPanel(null)">
            <button
              :class="[
                $route.path === '/chats'
                  ? 'bg-gray-800 text-white'
                  : 'hover:bg-gray-700/20',
                'p-2 rounded-full relative',
              ]"
            >
              <Icon
                icon="material-symbols-light:chat-outline"
                width="24"
                height="24"
              />
              <div class="absolute -top-1 right-0">
                <span
                  class="text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"
                  >{{ messages.length }}</span
                >
              </div>
            </button>
          </RouterLink>

          <RouterLink to="/notifications" @click.native="showPanel(null)">
            <button
              :class="[
                $route.path === '/notifications'
                  ? 'bg-gray-800 text-white'
                  : 'hover:bg-gray-700/20',
                'p-2 rounded-full relative ',
              ]"
            >
              <Icon
                icon="material-symbols-light:notification-important-outline-sharp"
                width="24"
                height="24"
              />
              <div class="absolute -top-1 right-0">
                <span
                  class="text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"
                  >{{ notifications }}</span
                >
              </div>
            </button>
          </RouterLink>
          <button
            @click="showPanel('settings')"
            class="size-10 rounded-full bg-gray-50 border border-gray-700"
          >
            <img
              v-if="userData.userPhotoURL"
              :src="userData.userPhotoURL"
              loading="lazy"
              alt=""
              class="h-full w-full object-cover rounded-full object-center"
            />
            <div v-else class="flex justify-center items-center">
              <Icon
                icon="material-symbols-light:store"
                width="30"
                height="30"
              />
            </div>
          </button>
        </div>
        <div
          v-else
          class="flex gap-2 h-11 justify-start items-center px-4 py-1"
        ></div>

        <div
          v-if="isLoggedIn === false"
          class="m-2 flex justify-center items-center gap-2"
        >
          <RouterLink to="/login">
            <button
              class="px-4 py-1 bg-gray-800 text-white font-semibold text-sm"
            >
              <div class="sm:hidden">
                <Icon icon="mdi:login" width="24" height="24" />
              </div>
              <span class="hidden sm:flex py-1"> Log in</span>
            </button>
          </RouterLink>
          <RouterLink to="/register">
            <button
              class="px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"
            >
              <div class="sm:hidden">
                <Icon icon="mdi:register-outline" width="24" height="24" />
              </div>
              <span class="hidden sm:flex py-1">Sign Up</span>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <!-- settings side -->
  <aside
    v-if="openPanel === 'settings'"
    class="w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"
  >
    <button @click="showPanel(null)">
      <Icon
        icon="material-symbols-light:close-small-outline"
        width="24"
        height="24"
      />
    </button>
    <div class="mx-2 mb-2">
      <Settings />
      <button
        @click="logout"
        class="border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"
      >
        Logout
      </button>
    </div>
  </aside>
</template>
