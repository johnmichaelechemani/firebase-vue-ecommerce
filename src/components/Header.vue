<script setup>
import User from "../assets/dummyImages/user.jpg";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Settings from "@/views/Settings.vue";
import Cart from "@/views/Cart.vue";
import Favorite from "@/views/Favorite.vue";
import { useRouter } from "vue-router";

const route = useRouter();
const openPanel = ref(null);

const showPanel = (panel) => {
  openPanel.value = openPanel.value === panel ? null : panel;
};
const isLoggedIn = ref(true);
const logout = () => {
  route.push("/");
  isLoggedIn.value = false;
  openPanel.value = null;
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
          <RouterLink to="/chats" @click.native="showPanel(null)">
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
          <button
            @click="showPanel('favorite')"
            :class="[
              openPanel === 'favorite'
                ? 'bg-gray-800 text-white'
                : 'hover:bg-gray-700/20 ',
              'p-2 rounded-full ',
            ]"
          >
            <Icon
              icon="material-symbols-light:favorite-outline"
              width="24"
              height="24"
            />
          </button>
          <button
            @click="showPanel('cart')"
            :class="[
              openPanel === 'cart'
                ? 'bg-gray-800 text-white'
                : 'hover:bg-gray-700/20 ',
              'p-2 rounded-full ',
            ]"
          >
            <Icon icon="mdi-light:cart" width="24" height="24" />
          </button>
          <RouterLink to="/notifications" @click.native="showPanel(null)">
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
          <button
            @click="showPanel('settings')"
            class="size-10 rounded-full bg-gray-800"
          >
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

  <!-- cart side -->
  <aside
    v-if="openPanel === 'cart'"
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
      <Cart />
    </div>
  </aside>

  <!-- favorite side -->
  <aside
    v-if="openPanel === 'favorite'"
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
      <Favorite />
    </div>
  </aside>

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
        class="border p-2 my-4 border-gray-700/50 shadow-sm w-full text-gray-800 text-sm font-semibold place-items-center"
      >
        Logout
      </button>
    </div>
  </aside>
</template>
