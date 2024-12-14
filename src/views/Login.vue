<script setup>
import { isLoggedIn } from "../store.js";
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="flex justify-center items-center h-[calc(100%-5rem)]">
      <div class="border p-5">
        {{ isLoggedIn }}
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

        <div>
          <button
            class="w-full bg-gray-800 text-white text-sm font-semibold py-2.5"
          >
            Login
          </button>
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
