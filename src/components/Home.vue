<script setup>
import Shoes from "../assets/dummyImages/shoes.jpg";
import Dummy from "../assets/dummyImages/dummy.jpg";
</script>

<template>
  <h1
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="py-2">
      <nav class="m-2 flex justify-start items-center gap-2">
        <button
          class="px-2 py-1 text-sm font-semibold text-white bg-gray-700 border border-gray-700"
        >
          ITEMS
        </button>
        <button
          class="px-2 py-1 text-sm font-semibold border hover:bg-gray-700/10 transition border-gray-700/50"
        >
          ITEMS
        </button>
        <button
          class="px-2 py-1 text-sm font-semibold border hover:bg-gray-700/10 transition border-gray-700/50"
        >
          ITEMS
        </button>
        <button
          class="px-2 py-1 text-sm font-semibold border hover:bg-gray-700/10 transition border-gray-700/50"
        >
          ITEMS
        </button>
      </nav>

      <div class="relative overflow-y-scroll h-[calc(100vh-0rem)] pb-32">
        <div class="m-2">
          <h1 class="text-md font-semibold my-2">Top Items</h1>
          <div class="flex justify-start items-center gap-1">
            <div class="hover:bg-gray-700/10 transition">
              <div
                class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
              >
                <img
                  :src="Shoes"
                  alt=""
                  class="object-center h-full w-full object-cover"
                />
                <div
                  class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
                >
                  <span>99% </span>
                  <p>OFF</p>
                </div>
              </div>
              <div class="p-1">
                <h1 class="text-sm font-semibold">Shoes</h1>
                <div class="flex justify-start gap-2 items-center">
                  <p class="text-sm text-gray-800">$100</p>
                  <p class="text-xs text-gray-700">10k Sold</p>
                </div>
              </div>
            </div>
            <div class="hover:bg-gray-700/10 transition">
              <div
                class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
              >
                <img
                  :src="Dummy"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
                <div
                  class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
                >
                  <span>90% </span>
                  <p>OFF</p>
                </div>
              </div>
              <div class="p-1">
                <h1 class="text-sm font-semibold">Shoes</h1>
                <div class="flex justify-start gap-2 items-center">
                  <p class="text-sm text-gray-800">$100</p>
                  <p class="text-xs text-gray-700">10k Sold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-2">
          <h1 class="text-md font-semibold my-2">Recommendations</h1>
          <div class="flex flex-wrap gap-1">
            <div class="hover:bg-gray-700/10 transition">
              <div
                class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
              >
                <img
                  :src="Dummy"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
                <div
                  class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
                >
                  <span>90% </span>
                  <p>OFF</p>
                </div>
              </div>
              <div class="p-1">
                <h1 class="text-sm font-semibold">Shoes</h1>
                <div class="flex justify-start gap-2 items-center">
                  <p class="text-sm text-gray-800">$100</p>
                  <p class="text-xs text-gray-700">10k Sold</p>
                </div>
              </div>
            </div>
            <div class="hover:bg-gray-700/10 transition">
              <div
                class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
              >
                <img
                  :src="Dummy"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
                <div
                  class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
                >
                  <span>90% </span>
                  <p>OFF</p>
                </div>
              </div>
              <div class="p-1">
                <h1 class="text-sm font-semibold">Shoes</h1>
                <div class="flex justify-start gap-2 items-center">
                  <p class="text-sm text-gray-800">$100</p>
                  <p class="text-xs text-gray-700">10k Sold</p>
                </div>
              </div>
            </div>
            <div class="hover:bg-gray-700/10 transition">
              <div
                class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
              >
                <img
                  :src="Dummy"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
                <div
                  class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
                >
                  <span>90% </span>
                  <p>OFF</p>
                </div>
              </div>
              <div class="p-1">
                <h1 class="text-sm font-semibold">Shoes</h1>
                <div class="flex justify-start gap-2 items-center">
                  <p class="text-sm text-gray-800">$100</p>
                  <p class="text-xs text-gray-700">10k Sold</p>
                </div>
              </div>
            </div>
            <div class="hover:bg-gray-700/10 transition">
              <div
                class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
              >
                <img
                  :src="Dummy"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
                <div
                  class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
                >
                  <span>90% </span>
                  <p>OFF</p>
                </div>
              </div>
              <div class="p-1">
                <h1 class="text-sm font-semibold">Shoes</h1>
                <div class="flex justify-start gap-2 items-center">
                  <p class="text-sm text-gray-800">$100</p>
                  <p class="text-xs text-gray-700">10k Sold</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- dummy -->
        <div class="m-2">
          <h1 class="text-md font-semibold my-2">Recommendations</h1>
          <div class="flex justify-start items-center gap-1 overflow-x-auto">
            <div class="hover:bg-gray-700/10 transition">
              <div
                class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
              >
                <img
                  :src="Dummy"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
                <div
                  class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
                >
                  <span>90% </span>
                  <p>OFF</p>
                </div>
              </div>
              <div class="p-1">
                <h1 class="text-sm font-semibold">Shoes</h1>
                <div class="flex justify-start gap-2 items-center">
                  <p class="text-sm text-gray-800">$100</p>
                  <p class="text-xs text-gray-700">10k Sold</p>
                </div>
              </div>
            </div>
            <div class="hover:bg-gray-700/10 transition">
              <div
                class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
              >
                <img
                  :src="Dummy"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
                <div
                  class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
                >
                  <span>90% </span>
                  <p>OFF</p>
                </div>
              </div>
              <div class="p-1">
                <h1 class="text-sm font-semibold">Shoes</h1>
                <div class="flex justify-start gap-2 items-center">
                  <p class="text-sm text-gray-800">$100</p>
                  <p class="text-xs text-gray-700">10k Sold</p>
                </div>
              </div>
            </div>
            <div class="hover:bg-gray-700/10 transition">
              <div
                class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
              >
                <img
                  :src="Dummy"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
                <div
                  class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
                >
                  <span>90% </span>
                  <p>OFF</p>
                </div>
              </div>
              <div class="p-1">
                <h1 class="text-sm font-semibold">Shoes</h1>
                <div class="flex justify-start gap-2 items-center">
                  <p class="text-sm text-gray-800">$100</p>
                  <p class="text-xs text-gray-700">10k Sold</p>
                </div>
              </div>
            </div>
            <div class="hover:bg-gray-700/10 transition">
              <div
                class="sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"
              >
                <img
                  :src="Dummy"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
                <div
                  class="absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"
                >
                  <span>90% </span>
                  <p>OFF</p>
                </div>
              </div>
              <div class="p-1">
                <h1 class="text-sm font-semibold">Shoes</h1>
                <div class="flex justify-start gap-2 items-center">
                  <p class="text-sm text-gray-800">$100</p>
                  <p class="text-xs text-gray-700">10k Sold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </h1>
</template>
