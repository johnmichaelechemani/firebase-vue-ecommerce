import {
  collection,
  getFirestore,
  query,
  onSnapshot,
  where,
  orderBy,
  collectionGroup,
} from "firebase/firestore";
import { ref } from "vue";
import { userData } from "@/store";

const firestore = getFirestore();
const userId = userData.value.userId;
export const mallProducts = ref([]);
export const mallOrderProducts = ref([]);
export const sale = ref([]);

export const getMallProducts = () => {
  const productsQuery = query(
    collection(firestore, "products"),
    orderBy("timestamp", "desc"),
    where("mallId", "==", userId)
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
  const ordersQuery = query(
    collectionGroup(firestore, "purchaseItems"),
    where("mallId", "==", userId)
  );

  onSnapshot(
    ordersQuery,
    (querySnapshot) => {
      mallOrderProducts.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        userId: doc.ref.parent.parent.id,
        ...doc.data(),
      }));
      console.log("All orders updated in real-time:", mallOrderProducts.value);
    },
    (error) => {
      console.error("Error fetching orders:", error);
    }
  );
};

export const getMallSales = () => {
  const mallSalesQuery = query(collection(firestore, "users", userId, "sales"));
  onSnapshot(
    mallSalesQuery,
    (querySnapshot) => {
      sale.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("sales updated in real-time:", sale.value);
    },
    (error) => {
      console.error("Error fetching sales:", error);
    }
  );
};
