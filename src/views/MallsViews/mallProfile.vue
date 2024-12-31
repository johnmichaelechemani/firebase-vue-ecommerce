<script setup>
import { ref, onMounted, computed } from "vue";
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
const backgroundImageInput = ref(null);
const profileImageInput = ref(null);
const backgroundImagePreview = ref(null);
const profileImagePreview = ref(null);

const profileData = ref({
  userName: userData.value.userName,
  email: userData.value.email,
  backgroundImage: userData.value.bgImage || null,
  profileImage: userData.value.userPhotoURL || null,
});

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

const uploadImageToStorage = async (file, path) => {
  if (!file || !user.value) return null;
  try {
    const imageRef = storageRef(storage, path);
    const snapshot = await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

const save = async () => {
  try {
    if (user.value) {
      const updateData = {
        userName: profileData.value.userName,
        email: profileData.value.email,
      };
      if (profileData.value.backgroundImage instanceof File) {
        const bgImageURL = await uploadImageToStorage(
          profileData.value.backgroundImage,
          `users/${user.value.uid}/background_image`
        );
        if (bgImageURL) {
          updateData.bgImage = bgImageURL;
        }
      }
      if (profileData.value.profileImage instanceof File) {
        const profileImageURL = await uploadImageToStorage(
          profileData.value.profileImage,
          `users/${user.value.uid}/profile_image`
        );
        if (profileImageURL) {
          updateData.userPhotoURL = profileImageURL;
        }
      }
      const userRef = doc(firestore, "users", user.value.uid);
      await updateDoc(userRef, updateData);
      userData.value = {
        ...userData.value,
        ...updateData,
      };
      console.log("Profile updated successfully");
    }
  } catch (error) {
    console.error("Error saving profile data:", error);
  }
};

const triggerBackgroundImageUpload = () => {
  backgroundImageInput.value.click();
};
const triggerProfileImageUpload = () => {
  profileImageInput.value.click();
};
const backgroundImageSrc = computed(() => {
  if (backgroundImagePreview.value) {
    return backgroundImagePreview.value;
  }
  return userData.value.bgImage || null;
});
const profileImageSrc = computed(() => {
  if (profileImagePreview.value) {
    return profileImagePreview.value;
  }
  return userData.value.userPhotoURL || null;
});

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

onMounted(() => {
  console.log(userData.value);
});
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="py-2">
      <div class="m-2">
        <h1 class="text-sm mb-2 font-semibold">Edit your Profile</h1>

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
              class="absolute bottom-2 shadow right-2 p-1 border-2 bg-white rounded-full"
            >
              <Icon
                icon="material-symbols-light:edit-outline"
                width="24"
                height="24"
              />
            </button>
          </div>

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
                alt="profile"
                loading="lazy"
                class="w-full h-full object-cover object-center"
              />
              <button
                @click="triggerProfileImageUpload"
                class="absolute -bottom-2 shadow -right-2 border-2 bg-white rounded-full"
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

        <div class="mb-3">
          <p class="text-xs mb-1 font-semibold">Store Name:</p>
          <input
            type="text"
            v-model="profileData.userName"
            required
            class="font-semibold text-sm p-1 placeholder:text-xs placeholder:font-normal outline-gray-500/20 border w-full"
            placeholder="Enter store name"
          />
        </div>

        <div class="mb-3">
          <p class="text-xs mb-1 font-semibold">Store Email:</p>
          <input
            type="email"
            v-model="profileData.email"
            required
            class="font-semibold text-sm p-1 placeholder:text-xs placeholder:font-normal outline-gray-500/20 border w-full"
            placeholder="Enter store email"
          />
        </div>

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
