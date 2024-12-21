import {
  collection,
  addDoc,
  where,
  query,
  orderBy,
  onSnapshot,
  getDoc,
  setDoc,
  doc,
  serverTimestamp,
  count,
  getFirestore,
} from "firebase/firestore";

import { ref } from "vue";
import { useRoute } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "@/firebase.auth";

export const chatFunctions = async () => {
  const { user, auth } = useAuth();
  const firestore = getFirestore();

  await new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
      unsubscribe();
      resolve();
    });
  });

  const messages = ref([]);
  const userId = user.value.uid;

  const getChatId = (userId1, userId2) => {
    return [userId1, userId2].sort().join("_");
  };

  const sendMessage = async (message, reciever) => {

    const chatId = getChatId(userId, reciever);
    const tempMessage = {
      id: `temp_${Date.now()}`,
      senderId: userId,
      recipientId: reciever,
      message: message,
      isSending: true,
      timestamp: new Date(),
    };

    messages.value.push(tempMessage);
    try {
      await setDoc(
        doc(firestore, `chats/${chatId}`),
        {
          participants: {
            [userId]: true,
            [reciever]: true,
          },
          lastMessage: message,
          sender: userId,
          timestamp: serverTimestamp(),
        },
        { merge: true }
      );

      const messageDoc = await addDoc(
        collection(firestore, `chats/${chatId}/messages`),
        {
          senderId: userId,
          recipientId: reciever,
          message: message,
          timestamp: serverTimestamp(),
        }
      );

      messages.value = messages.value.map((msg) =>
        msg.id === tempMessage.id
          ? {
              ...msg,
              id: messageDoc.id,
              isSending: false,
            }
          : msg
      );
      localStorage.setItem(
        `messages_${chatId}`,
        JSON.stringify(messages.value)
      );
    } catch (e) {
      console.error("Firebase message send error:", e);
    }
  };
  return {
    sendMessage,
  };
};
