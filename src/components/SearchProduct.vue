<template>
  <div>
    <div class="fixed inset-0 z-50 bg-gray-800/30 backdrop-blur">
      <div class="relative flex justify-center items-center">
        <div class="mx-2 sm:m-0">
          <div
            class="border w-full border-gray-700/50 bg-gray-100 py-1.5 px-1 mt-5 mb-3 text-sm sm:w-96 flex"
          >
            <div class="px-1 flex justify-center items-center">
              <Icon
                icon="material-symbols-light:search"
                width="24"
                height="24"
              />
            </div>
            <input
              type="search"
              v-model="search"
              @input="handleSearch"
              class="w-full outline-none bg-transparent py-1 placeholder:text-sm placeholder:text-gray-700"
              placeholder="Search.."
            />
            <!-- Loading Spinner -->
            <div
              v-if="loading"
              class="px-1 flex justify-center text-green-500 items-center"
            >
              <Icon icon="eos-icons:loading" width="24" height="24" />
            </div>
          </div>
          <div
            v-if="search.trim()"
            class="sm:max-w-96 w-full text-white text-sm font-semibold my-1 p-2 border backdrop-blur-md bg-gray-500/10 max-h-80"
          >
            Search for "{{ search }}"
          </div>
          <div
            class="sm:max-w-96 w-full p-2 border backdrop-blur-md bg-gray-500/10 max-h-80"
          >
            <div class="pb-5">
              <p class="text-sm font-semibold text-gray-100">
                Search Discovery
              </p>
              <div class="flex flex-wrap gap-2 my-2">
                <span
                  class="flex text-xs border bg-gray-200/90 py-1 px-2 font-semibold justify-start items-center"
                >
                  <Icon icon="noto:fire" width="20" height="20" />
                  <span class="text-gray-800">Trouser For Men</span>
                </span>
                <span
                  class="flex text-xs border bg-gray-200/90 py-1 px-2 font-semibold justify-start items-center"
                >
                  <Icon icon="noto:fire" width="20" height="20" />
                  <span class="text-gray-800">Fabric Men Pants</span>
                </span>
                <span
                  class="flex text-xs border bg-gray-200/90 py-1 px-2 font-semibold justify-start items-center"
                >
                  <Icon icon="noto:fire" width="20" height="20" />
                  <span class="text-gray-800">Computer</span>
                </span>
                <span
                  class="flex text-xs border bg-gray-200/90 py-1 px-2 font-semibold justify-start items-center"
                >
                  <Icon icon="noto:fire" width="20" height="20" />
                  <span class="text-gray-800">Cellphone</span>
                </span>
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <button class="p-1 border my-1" @click="props.showPanel(null)">
              <Icon
                icon="material-symbols-light:close-rounded"
                width="20"
                height="20"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { defineProps, ref, watch } from "vue";
import { debounce } from "@/scripts/composables";

const props = defineProps({
  showPanel: Function,
});
const search = ref("");
const loading = ref(false);

const handleSearch = debounce(() => {
  loading.value = true;
  console.log("searching for:", search.value);

  setTimeout(() => {
    loading.value = false;
  }, 1000);
}, 500);

watch(search, (newValue) => {
  if (newValue.trim()) {
    handleSearch();
  }
});
</script>
