import {
  doc,
  deleteDoc,
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
import { userData } from "./../store";
import { ref, watch, computed } from "vue";

export const deleteItems = (folderName, productId) => {
  const db = getFirestore();
  try {
    const itemRef = doc(
      db,
      folderName,
      userData.value.userId,
      "items",
      productId
    );
    deleteDoc(itemRef);
    console.log("Item successfully deleted");
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};