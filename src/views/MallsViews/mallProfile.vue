<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { userData } from "@/store";

// Reactive state for profile data
const profileData = ref({
  storeName: userData.userName,
  storeEmail: "mic@gmail.com",
  backgroundImage: null,
  profileImage: null,
});

// References for file inputs
const backgroundImageInput = ref(null);
const profileImageInput = ref(null);

// Background Image Handling
const backgroundImagePreview = ref(null);
const handleBackgroundImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      backgroundImagePreview.value = e.target.result;
      profileData.value.backgroundImage = file;
    };
    reader.readAsDataURL(file);
  }
};

// Profile Image Handling
const profileImagePreview = ref(null);
const handleProfileImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImagePreview.value = e.target.result;
      profileData.value.profileImage = file;
    };
    reader.readAsDataURL(file);
  }
};

// Trigger file input click
const triggerBackgroundImageUpload = () => {
  backgroundImageInput.value.click();
};

const triggerProfileImageUpload = () => {
  profileImageInput.value.click();
};

// Save functionality
const save = () => {
  console.log("Saving Profile Data:", {
    storeName: profileData.value.storeName,
    storeEmail: profileData.value.storeEmail,
    backgroundImage: profileData.value.backgroundImage?.name,
    profileImage: profileData.value.profileImage?.name,
  });

  // Here you would typically send the data to a backend
  alert("Profile saved successfully!");
};

// Clear functionality
const clear = () => {
  profileData.value = {
    storeName: "",
    storeEmail: "",
    backgroundImage: null,
    profileImage: null,
  };
  backgroundImagePreview.value = null;
  profileImagePreview.value = null;

  // Reset file inputs
  if (backgroundImageInput.value) {
    backgroundImageInput.value.value = "";
  }
  if (profileImageInput.value) {
    profileImageInput.value.value = "";
  }
};
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="py-2">
      <div class="m-2">
        <h1 class="text-sm mb-2 font-semibold">Edit your Profile</h1>

        <!-- Background Image Upload -->
        <div class="relative sm:mb-14 mb-5">
          <input
            type="file"
            ref="backgroundImageInput"
            @change="handleBackgroundImageUpload"
            accept="image/*"
            class="hidden"
          />
          <div class="w-full h-32 sm:h-52 bg-gray-700/50">
            <img
              v-if="backgroundImagePreview"
              :src="backgroundImagePreview"
              loading="lazy"
              alt="Background Image"
              class="w-full h-full object-cover object-center"
            />
            <button
              @click="triggerBackgroundImageUpload"
              class="absolute bottom-2 shadow right-2 p-1 border-2 bg-white rounded-full"
            >
              <Icon
                icon="material-symbols-light:edit-outline"
                width="24"
                height="24"
              />
            </button>
          </div>

          <!-- Profile Image Upload -->
          <input
            type="file"
            ref="profileImageInput"
            @change="handleProfileImageUpload"
            accept="image/*"
            class="hidden"
          />
          <div
            class="sm:size-20 size-10 border-2 border-gray-700 bg-gray-700/90 absolute sm:-bottom-10 -bottom-5 left-2 shadow-xl"
          >
            <div class="relative">
              <img
                v-if="profileImagePreview"
                :src="profileImagePreview"
                alt="profile"
                loading="lazy"
                class="w-full h-full object-cover object-center"
              />
              <button
                @click="triggerProfileImageUpload"
                class="absolute -top-2 shadow -right-2 border-2 bg-white rounded-full"
              >
                <Icon
                  icon="material-symbols-light:edit-outline"
                  width="24"
                  height="24"
                />
              </button>
            </div>
          </div>
        </div>

        <!-- Store Name Input -->
        <div class="mb-3">
          <p class="text-xs mb-1 font-semibold">Store Name:</p>
          <input
            type="text"
            v-model="profileData.storeName"
            required
            class="font-semibold text-sm p-1 border w-full"
            placeholder="Enter store name"
          />
        </div>

        <!-- Store Email Input -->
        <div class="mb-3">
          <p class="text-xs mb-1 font-semibold">Store Email:</p>
          <input
            type="email"
            v-model="profileData.storeEmail"
            required
            class="font-semibold text-sm p-1 border w-full"
            placeholder="Enter store email"
          />
        </div>

        <!-- Action Buttons -->
        <div class="mb-3">
          <div class="flex items-center justify-start gap-2">
            <button
              @click="clear"
              class="w-20 border text-sm py-2 text-gray-700 font-semibold"
            >
              Clear
            </button>
            <button
              @click="save"
              class="w-20 border text-sm py-2 text-white bg-gray-800 font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
