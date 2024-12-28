<script setup>
import { ref } from "vue";
import { useAuth } from "@/firebase.auth";
import ErrorMessage from "@/components/ErrorMessage.vue";
import { registerErrorMessage } from "@/store";

const { registerAccount, name, email, password, role } = useAuth();
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="flex justify-center items-center h-[calc(100%-5rem)]">
      <div class="border p-5 min-w-72 sm:min-w-96">
        <ErrorMessage :err-message="registerErrorMessage" />
        <h1 class="text-lg font-bold my-3">Sign Up</h1>
        <div class="my-2">
          <p class="text-sm font-semibold text-gray-700">
            Name: <span title="important">*</span>
          </p>
          <input
            v-model="name"
            type="text"
            class="outline-none border p-2 w-full"
          />
        </div>
        <div class="my-2">
          <p class="text-sm font-semibold text-gray-700">
            Email: <span title="important">*</span>
          </p>
          <input
            type="email"
            v-model="email"
            class="outline-none border p-2 w-full"
          />
        </div>
        <div class="my-2">
          <p class="text-sm font-semibold text-gray-700">
            Password: <span title="important">*</span>
          </p>
          <input
            v-model="password"
            type="password"
            class="outline-none border p-2 w-full"
          />
        </div>
        <div class="my-2">
          <p class="text-sm font-semibold text-gray-700">
            Select Account Type: <span title="important">*</span>
          </p>
          <select
            v-model="role"
            class="border w-full text-sm font-semibold text-gray-700 py-2 my-1"
          >
            <option selected hidden>Choose a type</option>
            <option value="customer" class="text-xs font-semibold">
              Customer
            </option>
            <option value="seller" class="text-xs font-semibold">Seller</option>
            <option value="rider" class="text-xs font-semibold">Rider</option>
          </select>
        </div>

        <div class="mt-4">
          <button
            @click="registerAccount"
            class="w-full bg-gray-800 text-white text-sm font-semibold py-2.5"
          >
            Sign Up
          </button>
        </div>

        <p
          class="text-xs my-2 cursor-pointer flex justify-end gap-2 font-semibold text-gray-700"
        >
          Already have an account?
          <RouterLink to="/login" class="underline"> Login</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
