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
      <p class="text-sm font-semibold">Notifications</p>
      <div class="flex gap-4">
        <div
          class="my-2 border-r border-gray-700/50 w-16 sm:w-72 overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)]"
        >
          <div class="flex gap-2 justify-start items-center my-2">
            <div class="p-2 bg-gray-800 text-white shadow">
              <Icon
                icon="material-symbols-light:money-bag-outline-rounded"
                width="24"
                height="24"
              />
            </div>

            <p class="text-sm hidden sm:flex font-semibold">Promotions</p>
          </div>

          <div
            class="flex gap-2 justify-start items-center hover:bg-gray-700/10 my-2"
          >
            <div class="p-2 border shadow">
              <Icon
                icon="material-symbols-light:social-leaderboard-outline-rounded"
                width="24"
                height="24"
              />
            </div>

            <p class="text-sm hidden sm:flex font-semibold">Social Update</p>
          </div>
          <div
            class="flex gap-2 justify-start items-center hover:bg-gray-700/10 my-2"
          >
            <div class="p-2 border shadow">
              <Icon
                icon="material-symbols-light:finance"
                width="24"
                height="24"
              />
            </div>

            <p class="text-sm hidden sm:flex font-semibold">Finance Update</p>
          </div>
          <div
            class="flex gap-2 justify-start items-center hover:bg-gray-700/10 my-2"
          >
            <div class="p-2 border shadow">
              <Icon
                icon="material-symbols-light:settings-outline"
                width="24"
                height="24"
              />
            </div>

            <p class="text-sm hidden sm:flex font-semibold">Jm Shop Update</p>
          </div>
        </div>

        <div
          class="my-2 border-gray-700/50 w-full overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)]"
        >
          <div class="text-sm font-semibold">All</div>
          <div class="flex gap-2 justify-start shadow-sm items-start my-2">
            <div class="border sm:size-16 size-10 shadow">
              <img
                :src="Shoes"
                alt=""
                class="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <div
                class="flex justify-start items-center gap-2 font-semibold text-xs sm:text-sm"
              >
                <Icon
                  icon="material-symbols-light:flash-on"
                  width="24"
                  height="24"
                />
                Catch the BIG PRICE DROP!
              </div>
              <div>
                <p class="text-[9px] font-medium">
                  Kids who have never seen peace and kids who have never seen
                  wars have different values.
                </p>
              </div>
              <div class="flex justify-start items-center text-[9px]">
                <Icon
                  icon="material-symbols-light:timer-outline"
                  width="16"
                  height="16"
                />
                12/25/25 12:04pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
