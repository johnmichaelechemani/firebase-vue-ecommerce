<script setup>
import { ref } from "vue";
import { loginErrorMessage } from "../store.js";
import { Icon } from "@iconify/vue";
import { useAuth } from "@/firebase.auth";

const { signInWithGoogle, loginAnonymously } = useAuth();

if (loginErrorMessage) {
  setTimeout(() => {
    loginErrorMessage.value = "";
  }, 2000);
}
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="flex justify-center items-center h-[calc(100%-5rem)]">
      <div class="border p-5">
        <div
          v-if="loginErrorMessage"
          class="w-full border border-red-500/50 text-red-500 text-sm font-semibold py-2 px-2"
        >
          {{ loginErrorMessage }}
        </div>
        <h1 class="text-lg font-bold my-3">Login</h1>
        <div class="my-2">
          <p class="text-sm font-semibold text-gray-700">Email</p>
          <input
            type="text"
            class="outline-none border p-2 min-w-52 sm:min-w-80"
          />
        </div>
        <div class="my-2">
          <p class="text-sm font-semibold text-gray-700">Password</p>
          <input
            type="password"
            class="outline-none border p-2 min-w-52 sm:min-w-80"
          />
        </div>

        <a
          class="text-xs my-2 cursor-pointer underline flex justify-end font-semibold text-gray-700"
        >
          Forgot Password?
        </a>

        <div class="my-2">
          <button
            class="w-full bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold py-2.5"
          >
            Login
          </button>
        </div>
        <div>
          <p class="text-sm text-gray-600 text-center">or</p>
          <div class="my-2 flex justify-center items-center gap-2">
            <button
              @click="signInWithGoogle"
              class="w-full flex justify-between items-center px-4 hover:bg-gray-800 hover:text-white transition border py-2.5"
            >
              <Icon icon="mdi:google" width="20" height="20" />
              <span class="text-sm font-semibold"> Google</span>
            </button>
            <button
              @click="loginAnonymously"
              title="Login as anonymous"
              class="hover:bg-gray-800 hover:text-white transition border text-sm font-semibold py-2.5 px-4"
            >
              <Icon icon="mdi:anonymous" width="20" height="20" />
            </button>
          </div>
        </div>

        <p
          class="text-xs my-2 cursor-pointer flex justify-end gap-2 font-semibold text-gray-700"
        >
          Don't have an account?
          <RouterLink to="/register" class="underline"> Sign Up</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
