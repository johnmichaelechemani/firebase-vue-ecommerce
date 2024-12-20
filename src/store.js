// store.js
import { ref } from "vue";

export const cartItems = ref([]);
export const favoritesItem = ref([]);
export const messages = ref(5);
export const notifications = ref(23);
export const loginErrorMessage = ref("");
export const showSidebar = ref(false);
export const isLoggedIn = ref(null);
export const userData = ref(null);

import Rep from "./assets/dummyImages/ref.png";
import Computer from "./assets/dummyImages/computer.jpg";
import Shirt from "./assets/dummyImages/shirt.jpg";
import Shoes from "./assets/dummyImages/shoes.jpg";

export const products = ref([
  {
    id: 1,
    mallId: 123,
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
    name: "Kitchen Essentials",
    category: "kitchen-tools",
    price: Math.floor(Math.random() * 100) + 20,
    image: "https://via.placeholder.com/150?text=Kitchen+Tools",
    ratings: Math.floor(Math.random() * 5) + 1,
    discount: Math.floor(Math.random() * 25),
    sold: Math.floor(Math.random() * 1000) + 50,
  },
]);
