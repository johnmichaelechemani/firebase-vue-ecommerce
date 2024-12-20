import {
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInAnonymously,
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
import { isLoggedIn, userData } from "./store";

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
        role: "customer",
      });

      isLoggedIn.value = true;
      user.value = res.user;
      userData.value = {
        userName: res.user.displayName,
        userId: res.user.uid,
        userPhotoURL: res.user.photoURL,
        role: "customer",
      };
      router.push("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  const loginAnonymously = async () => {
    try {
      const res = await signInAnonymously(auth);
      const usersCollection = collection(firestore, "users");
      const userDocRef = doc(usersCollection, res.user.uid);

      await setDoc(userDocRef, {
        userName: "Anonymous User",
        userPhotoURL: "https://via.placeholder.com/150",
        userId: res.user.uid,
        userOnline: true,
        anonymous: true,
        role: "customer",
      });

      isLoggedIn.value = true;
      user.value = res.user;
      router.push("/");
    } catch (error) {
      console.error("Error during anonymous login:", error);
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
        const userDataFromFirestore = userDoc.data();
        isLoggedIn.value = userDataFromFirestore.userOnline;
        user.value = currentUser;
        userData.value = {
          userName: userDataFromFirestore.userName,
          userId: userDataFromFirestore.userId,
          userPhotoURL: userDataFromFirestore.userPhotoURL,
        };
      } else {
        isLoggedIn.value = false;
        user.value = null;
        userData.value = null;
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
    loginAnonymously,
    logoutAccount,
    user,
  };
};
