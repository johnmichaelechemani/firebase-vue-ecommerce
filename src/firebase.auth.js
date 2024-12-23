import {
  signOut,
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
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
  setPersistence(auth, browserLocalPersistence);
  const user = ref(auth.currentUser);

  auth.onAuthStateChanged((authUser) => {
    user.value = authUser;
  });

  const router = useRouter();
  const firestore = getFirestore();

  const usersCollection = collection(firestore, "users");
  const authGoogle = new GoogleAuthProvider();
  const email = ref("");
  const password = ref("");
  const name = ref("");
  const role = ref("");

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, authGoogle);
      const userDocRef = doc(usersCollection, res.user.uid);

      await setDoc(userDocRef, {
        userName: res.user.displayName,
        userId: res.user.uid,
        userPhotoURL: res.user.photoURL,
        userOnline: true,
        email: res.user.email,
        role: "customer",
      });

      const userDetails = {
        userName: res.user.displayName,
        userId: res.user.uid,
        email: res.user.email,
        userPhotoURL: res.user.photoURL,
        role: "customer",
      };

      isLoggedIn.value = true;
      user.value = res.user;
      userData.value = userDetails;
      localStorage.setItem("userData", JSON.stringify(userDetails));
      router.push("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const loginAnonymously = async () => {
    try {
      const res = await signInAnonymously(auth);

      const userDocRef = doc(usersCollection, res.user.uid);

      await setDoc(userDocRef, {
        userName: "Anonymous User",
        userPhotoURL: "https://via.placeholder.com/150",
        userId: res.user.uid,
        userOnline: true,
        anonymous: true,
        role: "customer",
      });

      const userDetails = {
        userName: "Anonymous User",
        userPhotoURL: "https://via.placeholder.com/150",
        userId: res.user.uid,
        anonymous: true,
        role: "customer",
      };

      isLoggedIn.value = true;
      user.value = res.user;
      userData.value = userDetails;
      localStorage.setItem("userData", JSON.stringify(userDetails));
      router.push("/");
    } catch (error) {
      console.error("Error during anonymous login:", error);
    }
  };

  const loginAccount = async () => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      const userDocRef = doc(usersCollection, res.user.uid);
      await updateDoc(userDocRef, {
        userOnline: true,
      });
      const userDoc = await getDoc(userDocRef);
      const userDataFromFirestore = userDoc.data();
      const userDetails = {
        userName: userDataFromFirestore.userName,
        userId: res.user.uid,
        userPhotoURL: userDataFromFirestore.userPhotoURL,
        email: userDataFromFirestore.email,
        role: userDataFromFirestore.role,
      };

      const isValidSellerRole =
        userDataFromFirestore &&
        userDataFromFirestore.role &&
        userDataFromFirestore.role.toLowerCase() === "seller";

      isLoggedIn.value = true;
      user.value = res.user;
      userData.value = userDetails;
      localStorage.setItem("userData", JSON.stringify(userDetails));

      if (isValidSellerRole) {
        router.push("/seller");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const registerAccount = async () => {
    await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value,
      name.value,
      role.value
    )
      .then((res) => {
        const userDocRef = doc(usersCollection, res.user.uid);
        setDoc(userDocRef, {
          userName: name.value,
          userId: res.user.uid,
          userPhotoURL: null,
          email: email.value,
          userOnline: false,
          bgImage: null,
          role: role.value,
        });
        router.push("/login");
      })
      .catch(() => {});
  };

  const logoutAccount = async () => {
    if (user.value) {
      const userDocRef = doc(firestore, "users", user.value.uid);
      try {
        await updateDoc(userDocRef, { userOnline: false });
        await signOut(auth);
        // Clear localStorage on logout
        localStorage.removeItem("userData");
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

  return {
    signInWithGoogle,
    loginAnonymously,
    logoutAccount,
    user,
    registerAccount,
    name,
    email,
    password,
    role,
    loginAccount,
    auth,
  };
};
