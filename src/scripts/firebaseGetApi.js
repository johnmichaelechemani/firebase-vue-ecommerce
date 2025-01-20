import {
  collection,
  getFirestore,
  query,
  onSnapshot,
  where,
  orderBy,
} from "firebase/firestore";
import { ref } from "vue";
import { userData } from "@/store";

const firestore = getFirestore();
export const mallProducts = ref([]);
export const mallOrderProducts = ref([]);

export const getMallProducts = () => {
  const productsQuery = query(
    collection(firestore, "products"),
    orderBy("timestamp", "desc"),
    where("mallId", "==", userData.value.userId)
  );
  onSnapshot(
    productsQuery,
    (querySnapshot) => {
      mallProducts.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Products updated in real-time:", mallProducts.value);
    },
    (error) => {
      console.error("Error fetching products:", error);
    }
  );
};

export const getMallOrderProducts = () => {
  const userId = "kclrX5hnGdMaqvvFpys6Q4qNW7G3";
  const ordersQuery = query(
    collection(firestore, `purchase/${userId}/items`),
    where("mallId", "==", userData.value.userId)
  );
  onSnapshot(
    ordersQuery,
    (querySnapshot) => {
      mallOrderProducts.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Orders updated in real-time:", mallOrderProducts.value);
    },
    (error) => {
      console.error("Error fetching orders:", error);
    }
  );
};
