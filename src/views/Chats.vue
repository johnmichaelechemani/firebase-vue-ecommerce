<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Shoes from "../assets/dummyImages/shoes.jpg";
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="p-2">
      <p class="text-sm font-semibold">Chats</p>
      <div class="flex gap-4">
        <div
          class="my-2 border-r border-gray-700/50 w-16 sm:w-72 overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)]"
        >
          <div
            class="flex gap-2 justify-start shadow-sm items-center my-2 mr-2"
          >
            <div class="border size-12 shadow">
              <img
                :src="Shoes"
                alt=""
                class="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <p class="text-sm hidden sm:flex font-semibold">Mike Store</p>
              <p class="text-xs truncate font-medium max-w-32">
                Hey, select any of your like!
              </p>
            </div>
          </div>
          <div
            class="flex gap-2 justify-start shadow-sm items-center my-2 mr-2"
          >
            <div class="border size-12 shadow">
              <img
                :src="Shoes"
                alt=""
                class="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <p class="text-sm hidden sm:flex font-semibold">Michael Store</p>
              <p class="text-xs truncate font-medium max-w-32">
                Yo! what do you like?
              </p>
            </div>
          </div>
        </div>

        <div class="my-2 border-gray-700/50 w-full">
          <div class="text-sm font-semibold">Select Chat</div>
          <div class="font-semibold text-sm flex justify-center items-center">
            Nothings here!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
