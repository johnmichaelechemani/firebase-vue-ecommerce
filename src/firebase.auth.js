import {
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  getFirestore,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { isLoggedIn } from "./store";

export const useAuth = () => {
  const auth = getAuth();
  const router = useRouter();
  const firestore = getFirestore();
  const user = ref(null);

  const authGoogle = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, authGoogle);
      const usersCollection = collection(firestore, "users");
      const userDocRef = doc(usersCollection, res.user.uid);

      await setDoc(userDocRef, {
        userName: res.user.displayName,
        userId: res.user.uid,
        userPhotoURL: res.user.photoURL,
        userOnline: true,
      });

      isLoggedIn.value = true;
      user.value = res.user;
      router.push("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const logoutAccount = async () => {
    if (user.value) {
      const userDocRef = doc(firestore, "users", user.value.uid);

      try {
        await updateDoc(userDocRef, { userOnline: false });
        await signOut(auth);

        isLoggedIn.value = false;
        user.value = null;
        router.push("/");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    } else {
      router.push({
        path: "/",
        state: { errorMessage: "You must login first" },
      });
    }
  };

  const checkUserStatus = async (currentUser) => {
    if (currentUser) {
      const userDocRef = doc(firestore, "users", currentUser.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        isLoggedIn.value = userData.userOnline;
        user.value = currentUser;
      } else {
        isLoggedIn.value = false;
        user.value = null;
      }
    } else {
      isLoggedIn.value = false;
      user.value = null;
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    checkUserStatus(currentUser);
  });

  return {
    signInWithGoogle,
    logoutAccount,
    user,
  };
};
