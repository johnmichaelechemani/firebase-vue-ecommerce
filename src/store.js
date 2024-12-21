// store.js
import { ref, onMounted } from "vue";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const cartItems = ref([]);
export const favoritesItem = ref([]);
export const messages = ref(5);
export const notifications = ref(23);
export const loginErrorMessage = ref("");
export const showSidebar = ref(false);
export const isLoggedIn = ref(null);
export const userData = ref(null);
export const mallsAccount = ref([]);

import Rep from "./assets/dummyImages/ref.png";
import Computer from "./assets/dummyImages/computer.jpg";
import Shirt from "./assets/dummyImages/shirt.jpg";
import Shoes from "./assets/dummyImages/shoes.jpg";

export const products = ref([
  {
    id: 1,
    mallId: "9YhScvvQvWdciOHb2kPrs4vv8N82",
    mallName: "Store ni Michael",
    name: "Shoes ni Mike",
    category: "shoes",
    mall: true,
    price: Math.floor(Math.random() * 500) + 50,
    image: Shoes,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 50),
    sold: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 2,
    mallId: 124234243,
    mallName: "Store ni John",
    name: "Home Appliances Pro",
    category: "home-appliances",
    price: Math.floor(Math.random() * 500) + 200,
    image: Rep,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 70),
    sold: Math.floor(Math.random() * 2000) + 500,
  },
  {
    id: 3,
    mallId: 122343,
    mallName: "Store ni Michael",
    name: "Casual Apparel",
    category: "mens-womens-apparel",
    price: Math.floor(Math.random() * 300) + 50,
    image: Shirt,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 40),
    sold: Math.floor(Math.random() * 1500) + 200,
  },
  {
    id: 4,
    mallId: 1243243,
    mallName: "Store ni Michael",
    name: "High-Performance Laptop",
    category: "computers",
    price: Math.floor(Math.random() * 2000) + 500,
    image: Computer,
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 30),
    sold: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 5,
    mallId: 1243243,
    mallName: "Store ni Michael",
    name: "Kids Fun Apparel",
    category: "kids-apparel",
    price: Math.floor(Math.random() * 200) + 30,
    image: "https://via.placeholder.com/150?text=Kids+Apparel",
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 50),
    sold: Math.floor(Math.random() * 800) + 100,
  },
  {
    id: 6,
    mallId: 1233434,
    mallName: "Store ni Michael",
    name: "Kitchen Essentials",
    category: "kitchen-tools",
    price: Math.floor(Math.random() * 100) + 20,
    image: "https://via.placeholder.com/150?text=Kitchen+Tools",
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 25),
    sold: Math.floor(Math.random() * 1000) + 50,
  },
]);

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

    // Update the mallsAccount store with sellers
    mallsAccount.value = sellers;

    return sellers;
  } catch (error) {
    console.error("Error fetching sellers: ", error);
    return [];
  }
};
