<script setup>
import User from "../assets/dummyImages/user.jpg";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const isShowSetting = ref(false);
const showSetting = () => {
  isShowSetting.value = !isShowSetting.value;
};
const hideSetting = () => {
  isShowSetting.value = false;
};

const isLoggedIn = ref(true);
const logout = () => {
  isLoggedIn.value = false;
};
</script>
<template>
  <nav
    class="ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"
  >
    <div class="relative flex justify-between items-center">
      <div class="ml-2 hidden sm:flex">
        <h1 class="font-semibold text-lg">Jm's Shops</h1>
      </div>
      <div
        class="border ml-2 border-gray-700/50 py-1.5 px-1 text-sm w-full sm:w-1/3 flex"
      >
        <div class="px-1">
          <Icon icon="material-symbols-light:search" width="20" height="20" />
        </div>
        <input
          type="text"
          class="w-full outline-none placeholder:text-sm placeholder:text-gray-700"
          placeholder="Search.."
        />
      </div>
      <div class="flex justify-end items-center gap-1">
        <div v-if="isLoggedIn" class="flex justify-end items-center gap-1 m-2">
          <RouterLink to="/chats">
            <button
              :class="[
                $route.path === '/chats'
                  ? 'bg-gray-800 text-white'
                  : 'hover:bg-gray-700/20',
                'p-2 rounded-full ',
              ]"
            >
              <Icon
                icon="material-symbols-light:chat-outline"
                width="24"
                height="24"
              />
            </button>
          </RouterLink>
          <button class="p-2 rounded-full hover:bg-gray-700/20">
            <Icon
              icon="material-symbols-light:favorite-outline"
              width="24"
              height="24"
            />
          </button>
          <button class="p-2 rounded-full hover:bg-gray-700/20">
            <Icon icon="mdi-light:cart" width="24" height="24" />
          </button>
          <RouterLink to="/notifications">
            <button
              :class="[
                $route.path === '/notifications'
                  ? 'bg-gray-800 text-white'
                  : 'hover:bg-gray-700/20',
                'p-2 rounded-full ',
              ]"
            >
              <Icon
                icon="material-symbols-light:notification-important-outline-sharp"
                width="24"
                height="24"
              />
            </button>
          </RouterLink>
          <button @click="showSetting" class="size-10 rounded-full bg-gray-800">
            <img
              :src="User"
              alt=""
              class="h-full w-full object-cover rounded-full object-center"
            />
          </button>
        </div>

        <div v-else class="m-2 flex justify-center items-center gap-2">
          <button
            class="px-4 py-1 bg-gray-800 text-white font-semibold text-sm"
          >
            <div class="sm:hidden">
              <Icon icon="mdi:login" width="24" height="24" />
            </div>
            <span class="hidden sm:flex py-1"> Log in</span>
          </button>
          <button
            class="px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"
          >
            <div class="sm:hidden">
              <Icon icon="mdi:register-outline" width="24" height="24" />
            </div>
            <span class="hidden sm:flex py-1">Sign Up</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <aside
    v-if="isShowSetting"
    class="w-52 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"
  >
    <button @click="hideSetting">
      <Icon
        icon="material-symbols-light:close-small-outline"
        width="24"
        height="24"
      />
    </button>
    <div class="mx-2 mb-2">
      <p class="text-xs font-semibold text-gray-500">My Account</p>
      <button class="flex justify-center items-center gap-2 my-2">
        <div class="border p-1 shadow place-items-center">
          <Icon
            icon="material-symbols-light:edit-outline"
            width="24"
            height="24"
          />
        </div>
        <p class="text-sm font-semibold text-gray-700">Account</p>
      </button>
      <button class="flex justify-center items-center gap-2 my-2">
        <div class="border p-1 shadow place-items-center">
          <Icon
            icon="material-symbols-light:location-on-outline"
            width="24"
            height="24"
          />
        </div>
        <p class="text-sm font-semibold text-gray-700">Addresses</p>
      </button>
      <p class="text-xs font-semibold text-gray-500">Support</p>
      <button class="flex justify-center items-center gap-2 my-2">
        <div class="border p-1 shadow place-items-center">
          <Icon
            icon="material-symbols-light:help-outline"
            width="24"
            height="24"
          />
        </div>
        <p class="text-sm font-semibold text-gray-700">Help Centre</p>
      </button>
      <button class="flex justify-center items-center gap-2 my-2">
        <div class="border p-1 shadow place-items-center">
          <Icon
            icon="material-symbols-light:info-outline"
            width="24"
            height="24"
          />
        </div>
        <p class="text-sm font-semibold text-gray-700">About</p>
      </button>
      <button class="flex justify-center items-center gap-2 my-2">
        <div class="border p-1 shadow place-items-center">
          <Icon
            icon="fluent:people-community-32-light"
            width="24"
            height="24"
          />
        </div>
        <p class="text-sm font-semibold text-gray-700">Community Rules</p>
      </button>
      <button
        @click="logout"
        class="border p-2 my-4 border-gray-700/50 shadow-sm w-full text-gray-800 text-sm font-semibold place-items-center"
      >
        Logout
      </button>
    </div>
  </aside>
</template>
