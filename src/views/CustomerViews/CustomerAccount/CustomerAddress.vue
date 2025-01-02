<template>
  <div
    class="sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div
      class="p-2 relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32 w-full"
    >
      <p class="text-sm font-semibold capitalize border-b pb-2">My Addresses</p>
      <div>
        <p class="text-sm font-semibold py-1 px-2">Address</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div class="border border-gray-800/50 bg-gray-600/5 px-2 py-1">
            <div class="flex justify-start items-center gap-2">
              <p class="text-sm font-semibold py-1">John Michael</p>
              |
              <span class="text-sm text-gray-600"> (+63) 9095627812</span>
            </div>
            <div class="text-xs text-gray-700">
              <p class="">Block 3 Lot 2, Phase 1, Brgy. San Jose</p>
              <p class="">Malapit samay plaza</p>
              <p class="">Antipolo City, Rizal, 4500</p>
            </div>
            <span
              class="text-xs font-semibold border border-gray-800/50 px-2 shadow"
            >
              Default
            </span>
          </div>
        </div>
        <div class="my-2">
          <div class="text-sm font-semibold">Add new address</div>
          <div
            class="border p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div class="border p-2">
              <div class="text-gray-700 text-sm">Contact</div>
              <input
                type="text"
                class="border w-full p-1 mb-1"
                placeholder="Full Name"
              />
              <input
                type="number"
                class="border w-full p-1"
                placeholder="Phone Number"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
