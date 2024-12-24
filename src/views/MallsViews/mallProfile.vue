<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import { userData } from "@/store";
import { useAuth } from "@/firebase.auth";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
const { user } = useAuth();
const firestore = getFirestore();
// Reactive state for profile data
const profileData = ref({
  storeName: userData.value.userName,
  storeEmail: userData.value.email,
  backgroundImage: userData.value.bgImage || null,
  profileImage: userData.value.userPhotoURL || null,
});

onMounted(() => {
  console.log(userData.value);
});

const save = async () => {
  try {
    if (user.value) {
      const userDocRef = doc(firestore, "users", user.value.uid);

      await updateDoc(userDocRef, {
        userName: profileData.value.storeName,
        email: profileData.value.storeEmail,
      });
      const freshUserDoc = await getDoc(userDocRef);
      const freshUserData = freshUserDoc.data();
      const updatedUserData = {
        ...freshUserData,
        timestamp: Date.now(),
      };
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      // Update reactive userData
      userData.value = updatedUserData;
    }
    console.log("Profile data saved successfully");
  } catch (error) {
    console.error("Error saving profile data:", error);
  }
};

const clear = () => {
  profileData.value = {
    storeName: "",
    storeEmail: "",
    backgroundImage: null,
    profileImage: null,
  };
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
          <div class="w-full h-32 sm:h-52 bg-gray-700/50">
            <img
              v-if="profileData.backgroundImage"
              :src="profileData.backgroundImage"
              loading="lazy"
              alt="Background Image"
              class="w-full h-full object-cover object-center"
            />
          </div>

          <div
            class="border-2 border-gray-700 bg-gray-50 absolute sm:-bottom-10 -bottom-5 left-2 shadow-xl"
          >
            <div class="relative sm:size-20 size-10 flex justify-center items-center">
              <img
                v-if="profileData.profileImage"
                :src="profileData.profileImage"
                alt="profile"
                loading="lazy"
                class="w-full h-full object-cover object-center"
              />
              <div v-else class="flex justify-center items-center">
                <Icon
                  icon="material-symbols-light:store"
                  width="30"
                  height="30"
                />
              </div>
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
            class="font-semibold text-sm p-1 placeholder:text-xs placeholder:font-normal outline-gray-500/20 border w-full"
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
            class="font-semibold text-sm p-1 placeholder:text-xs placeholder:font-normal outline-gray-500/20 border w-full"
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
