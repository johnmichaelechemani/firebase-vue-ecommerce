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
import {
  isLoggedIn,
  userData,
  loginErrorMessage,
  registerErrorMessage,
} from "./store";
import { clearAlert } from "./scripts/composables";

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
  const role = ref("customer");
  const loginLoading = ref(false);

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, authGoogle);
      const userDocRef = doc(usersCollection, res.user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        await updateDoc(userDocRef, {
          userOnline: true,
        });
      } else {
        await setDoc(userDocRef, {
          userName: res.user.displayName,
          userId: res.user.uid,
          userPhotoURL: res.user.photoURL,
          userOnline: true,
          email: res.user.email,
          role: "customer",
        });
      }
      const userDetails = {
        userName: res.user.displayName,
        userId: res.user.uid,
        email: res.user.email,
        userPhotoURL: res.user.photoURL,
        role: "customer",
        timestamp: Date.now(),
        accessToken: generateSecureToken(),
      };
      const userDataFromFirestore = userDoc.data();

      isLoggedIn.value = true;
      user.value = res.user;
      userData.value = userDetails;
      localStorage.setItem("userData", JSON.stringify(userDetails));
      if (userDataFromFirestore.role.toLowerCase() === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
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
        timestamp: Date.now(),
        accessToken: generateSecureToken(),
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
    loginLoading.value = true;
    if (email.value.trim() === "" || password.value.trim() === "") {
      loginErrorMessage.value = "Enter your account!";
      clearAlert(loginErrorMessage);
      return;
    }
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
        bgImage: userDataFromFirestore.bgImage || null,
        userId: res.user.uid,
        userPhotoURL: userDataFromFirestore.userPhotoURL,
        email: userDataFromFirestore.email,
        role: userDataFromFirestore.role,
        timestamp: Date.now(),
        accessToken: generateSecureToken(),
      };

      isLoggedIn.value = true;
      user.value = res.user;
      userData.value = userDetails;
      localStorage.setItem("userData", JSON.stringify(userDetails));
      loginLoading.value = false;

      if (userDataFromFirestore.role.toLowerCase() === "seller") {
        router.push("/seller");
      } else if (userDataFromFirestore.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (error) {
      loginErrorMessage.value = "Invalid credentials!";
      clearAlert(loginErrorMessage);
      console.error("Login error:", error);
    }
  };

  const registerAccount = async () => {
    if (
      email.value.trim() === "" ||
      password.value.trim() === "" ||
      name.value.trim() === "" ||
      role.value.trim() === ""
    ) {
      registerErrorMessage.value = "Enter your information.";
      clearAlert(registerErrorMessage);
      return;
    }
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
      .catch(() => {
        registerErrorMessage.value = "Invalid information.";
        clearAlert(registerErrorMessage);
      });
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

  const generateSecureToken = () => {
    const randomBytes = () => {
      const array = new Uint8Array(16);
      crypto.getRandomValues(array);
      return Array.from(array, (byte) =>
        byte.toString(16).padStart(2, "0")
      ).join("");
    };
    const timestamp = Date.now();
    const randomPart = randomBytes();
    const token = `${timestamp}-${randomPart}`;
    const hashToken = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
      return Math.abs(hash).toString(16);
    };
    return `${token}-${hashToken(token)}`;
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
    loginLoading,
  };
};
