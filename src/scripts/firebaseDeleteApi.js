import {
  doc,
  deleteDoc,
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
import { userData } from "./../store";
import { ref, watch, computed } from "vue";

export const deleteMessage = ref("");

export const deleteItems = (folderName, productId, productsEndFolder) => {
  const db = getFirestore();
  try {
    const itemRef = doc(
      db,
      folderName,
      userData.value.userId,
      productsEndFolder,
      productId
    );
    deleteDoc(itemRef);
    console.log("Item successfully deleted");
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};

export const deleteProducts = (folderName, productId) => {
  const db = getFirestore();
  try {
    const prodRef = doc(db, folderName, productId);
    deleteDoc(prodRef);
    deleteMessage.value = "Product successfully deleted!";
    setTimeout(() => {
      deleteMessage.value = "";
    }, 2000);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
