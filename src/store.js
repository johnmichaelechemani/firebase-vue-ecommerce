// store.js
import { ref } from "vue";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

// global variables and storages
export const cartItems = ref([]);
export const favoritesItem = ref([]);
export const messages = ref([]);
export const notifications = ref(23);
export const loginErrorMessage = ref("");
export const registerErrorMessage = ref("");
export const showSidebar = ref(false);
export const isLoggedIn = ref(null);
export const userData = ref(null);
export const mallsAccount = ref([]);
export const products = ref([]);
export const purchaseProducts = ref([]);
export const isProductLoading = ref(false);
const storedUserData = localStorage.getItem("userData");

// fetch global data
export const useMallsAccount = async () => {
  const db = getFirestore();
  try {
    const sellersQuery = query(
      collection(db, "users"),
      where("role", "==", "seller")
    );
    const querySnapshot = await getDocs(sellersQuery);
    const sellers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    mallsAccount.value = sellers;
    return sellers;
  } catch (error) {
    console.error("Error fetching sellers: ", error);
    return [];
  }
};

export const getProducts = () => {
  const db = getFirestore();
  isProductLoading.value = true;
  try {
    const productsQuery = query(collection(db, "products"));
    onSnapshot(productsQuery, (querySnapshot) => {
      products.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      isProductLoading.value = false;
      console.log("Products updated in real-time:", products.value);
    });

    return products.value;
  } catch (error) {
    console.error("Error fetching products:", error);
    isProductLoading.value = false;
    return [];
  }
};

export const getCartProducts = () => {
  const db = getFirestore();
  try {
    const cartsQuery = query(
      collection(db, "carts", userData.value.userId, "items")
    );
    onSnapshot(cartsQuery, (querySnapshot) => {
      cartItems.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("carts updated in real-time:", cartItems.value);
    });
    return cartItems.value;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return [];
  }
};

export const getFavoritesProducts = () => {
  const db = getFirestore();
  try {
    const favQuery = query(
      collection(db, "favorites", userData.value.userId, "items")
    );
    onSnapshot(favQuery, (querySnapshot) => {
      favoritesItem.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("fav updated in real-time:", favoritesItem.value);
    });
    return favoritesItem.value;
  } catch (error) {
    console.error("Error fetching fav items:", error);
    return [];
  }
};

export const getPurchaseProducts = () => {
  const db = getFirestore();
  try {
    const purchaseQuery = query(
      collection(db, "purchase", userData.value.userId, "items")
    );
    onSnapshot(purchaseQuery, (querySnapshot) => {
      purchaseProducts.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("purchase updated in real-time:", purchaseProducts.value);
    });
    return purchaseProducts.value;
  } catch (error) {
    console.error("Error fetching fav items:", error);
    return [];
  }
};

if (storedUserData) {
  const parsedUserData = JSON.parse(storedUserData);
  const isExpired = Date.now() - parsedUserData.timestamp > 24 * 60 * 60 * 1000;
  if (isExpired) {
    localStorage.removeItem("userData");
  } else {
    userData.value = parsedUserData;
    isLoggedIn.value = true;
  }
} else {
  userData.value = null;
  isLoggedIn.value = false;
}
