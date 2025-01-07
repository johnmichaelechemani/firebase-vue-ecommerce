<template>
  <div class="m-2">
    <div class="flex flex-wrap gap-1">
      <div v-for="n in 4" :key="n" class="animate-pulse">
        <div class="bg-gray-300 size-32 sm:size-40"></div>
        <div class="my-0.5 flex gap-2">
          <div class="h-3 bg-gray-300 rounded w-5"></div>
          <div class="h-3 bg-gray-300 rounded w-10"></div>
          <div class="h-3 bg-gray-300 rounded w-14"></div>
        </div>
        <div class="my-1 flex gap-2">
          <div class="h-4 bg-gray-300 rounded w-10"></div>
          <div class="h-4 bg-gray-300 rounded w-10"></div>
        </div>
        <div class="h-4 bg-gray-300 rounded w-[80%]"></div>
        <div class="h-5 bg-gray-300 rounded w-1/2 my-1"></div>
      </div>
    </div>
  </div>
</template>
