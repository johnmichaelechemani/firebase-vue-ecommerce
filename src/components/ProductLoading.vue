<template>
  <div class="space-y-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
      <div
        v-for="n in 4"
        :key="n"
        class="animate-pulse bg-gray-200 rounded-lg p-4"
      >
        <div class="bg-gray-300 h-10 rounded-lg mb-4"></div>
        <div class="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div class="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  </div>
</template>
