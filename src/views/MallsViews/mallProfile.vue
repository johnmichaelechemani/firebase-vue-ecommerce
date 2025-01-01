<script setup>
import { ref, computed, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import { userData } from "@/store";
import { useAuth } from "@/firebase.auth";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const { user } = useAuth();
const firestore = getFirestore();
const storage = getStorage();

// Refs for file inputs and previews
const backgroundImageInput = ref(null);
const profileImageInput = ref(null);
const backgroundImagePreview = ref(null);
const profileImagePreview = ref(null);

// Profile data reactive object
const profileData = ref({
  userName: userData.value.userName,
  email: userData.value.email,
  backgroundImage: userData.value.bgImage || null,
  profileImage: userData.value.userPhotoURL || null,
});

// Computed properties for image sources
const backgroundImageSrc = computed(
  () => backgroundImagePreview.value || userData.value.bgImage || null
);
const profileImageSrc = computed(
  () => profileImagePreview.value || userData.value.userPhotoURL || null
);

// Handle image uploads
const handleImageUpload = (event, previewRef, profileKey) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewRef.value = e.target.result;
      profileData.value[profileKey] = file;
    };
    reader.readAsDataURL(file);
  }
};

const handleBackgroundImageUpload = (event) =>
  handleImageUpload(event, backgroundImagePreview, "backgroundImage");
const handleProfileImageUpload = (event) =>
  handleImageUpload(event, profileImagePreview, "profileImage");

// Upload image to Firebase Storage
const uploadImageToStorage = async (file, path) => {
  if (!file || !user.value) return null;
  try {
    const imageRef = storageRef(storage, path);
    const snapshot = await uploadBytes(imageRef, file);
    return await getDownloadURL(snapshot.ref);
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

// Save profile data to Firestore
const save = async () => {
  if (!user.value) return;

  try {
    const updateData = {
      userName: profileData.value.userName,
      email: profileData.value.email,
    };

    // Upload and update background image if changed
    if (profileData.value.backgroundImage instanceof File) {
      const bgImageURL = await uploadImageToStorage(
        profileData.value.backgroundImage,
        `users/${user.value.uid}/background_image`
      );
      if (bgImageURL) updateData.bgImage = bgImageURL;
    }

    // Upload and update profile image if changed
    if (profileData.value.profileImage instanceof File) {
      const profileImageURL = await uploadImageToStorage(
        profileData.value.profileImage,
        `users/${user.value.uid}/profile_image`
      );
      if (profileImageURL) updateData.userPhotoURL = profileImageURL;
    }

    // Update Firestore document
    const userRef = doc(firestore, "users", user.value.uid);
    await updateDoc(userRef, updateData);

    // Update local user data and localStorage
    userData.value = { ...userData.value, ...updateData };
    localStorage.setItem("userData", JSON.stringify(userData.value));

    console.log("Profile updated successfully");
  } catch (error) {
    console.error("Error saving profile data:", error);
  }
};

// Clear form inputs and previews
const clear = () => {
  profileData.value = {
    userName: userData.value.userName,
    email: userData.value.email,
    backgroundImage: null,
    profileImage: null,
  };
  backgroundImagePreview.value = null;
  profileImagePreview.value = null;
  backgroundImageInput.value.value = "";
  profileImageInput.value.value = "";
};

// Trigger file input clicks
const triggerBackgroundImageUpload = () => backgroundImageInput.value.click();
const triggerProfileImageUpload = () => profileImageInput.value.click();

onMounted(() => {
  console.log("User data loaded:", userData.value);
});
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="py-2">
      <div class="m-2">
        <h1 class="text-sm mb-2 font-semibold">Edit your Profile</h1>

        <!-- Background Image Section -->
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
              v-if="backgroundImageSrc"
              :src="backgroundImageSrc"
              loading="lazy"
              alt="Background Image"
              class="w-full h-full object-cover object-center"
            />
            <button
              @click="triggerBackgroundImageUpload"
              class="absolute bottom-2 right-2 p-1 border-2 bg-white rounded-full shadow"
              aria-label="Edit background image"
            >
              <Icon
                icon="material-symbols-light:edit-outline"
                width="24"
                height="24"
              />
            </button>
          </div>

          <!-- Profile Image Section -->
          <input
            type="file"
            ref="profileImageInput"
            @change="handleProfileImageUpload"
            accept="image/*"
            class="hidden"
          />
          <div
            class="border-2 border-gray-700 bg-gray-700/90 absolute sm:-bottom-10 -bottom-5 left-2 shadow-xl"
          >
            <div class="relative sm:size-20 size-10">
              <img
                v-if="profileImageSrc"
                :src="profileImageSrc"
                alt="Profile"
                loading="lazy"
                class="w-full h-full object-cover object-center"
              />
              <button
                @click="triggerProfileImageUpload"
                class="absolute -bottom-2 -right-2 border-2 bg-white rounded-full shadow"
                aria-label="Edit profile image"
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
          <label for="storeName" class="text-xs mb-1 font-semibold"
            >Store Name:</label
          >
          <input
            id="storeName"
            type="text"
            v-model="profileData.userName"
            required
            class="font-semibold text-sm p-1 placeholder:text-xs placeholder:font-normal outline-gray-500/20 border w-full"
            placeholder="Enter store name"
          />
        </div>

        <!-- Store Email Input -->
        <div class="mb-3">
          <label for="storeEmail" class="text-xs mb-1 font-semibold"
            >Store Email:</label
          >
          <input
            id="storeEmail"
            type="email"
            v-model="profileData.email"
            required
            class="font-semibold text-sm p-1 placeholder:text-xs placeholder:font-normal outline-gray-500/20 border w-full"
            placeholder="Enter store email"
          />
        </div>

        <!-- Action Buttons -->
        <div class="mb-3">
          <div class="flex items-center justify-start gap-2">
            <button
              @click="clear"
              class="w-20 border text-sm py-2 text-gray-700 font-semibold hover:bg-gray-100"
            >
              Clear
            </button>
            <button
              @click="save"
              class="w-20 border text-sm py-2 text-white bg-gray-800 font-semibold hover:bg-gray-900"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
