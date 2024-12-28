<script setup>
import { ref } from "vue";
import { loginErrorMessage } from "../../store.js";
import { Icon } from "@iconify/vue";
import { useAuth } from "@/firebase.auth";
import ErrorMessage from "@/components/ErrorMessage.vue";

const { signInWithGoogle, loginAnonymously, loginAccount, email, password } =
  useAuth();
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="flex justify-center items-center h-[calc(100%-5rem)]">
      <div class="border p-5 min-w-72 sm:min-w-96">
        <ErrorMessage :err-message="loginErrorMessage" />

        <h1 class="text-lg font-bold mb-3">Login</h1>
        <div class="my-2">
          <p class="text-sm font-semibold text-gray-700">Email</p>
          <input
            v-model="email"
            required
            type="text"
            class="outline-none border p-2 w-full"
          />
        </div>
        <div class="my-2">
          <p class="text-sm font-semibold text-gray-700">Password</p>
          <input
            v-model="password"
            required
            type="password"
            class="outline-none border p-2 w-full"
          />
        </div>

        <a
          class="text-xs my-2 cursor-pointer underline flex justify-end font-semibold text-gray-700"
        >
          Forgot Password?
        </a>

        <div class="my-2">
          <button
            @click="loginAccount"
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
          class="text-xs mt-2 cursor-pointer flex justify-end gap-2 font-semibold text-gray-700"
        >
          Don't have an account?
          <RouterLink to="/register" class="underline"> Sign Up</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
