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
} from "firebase/firestore";
import { ref } from "vue";
import { useAuth } from "@/firebase.auth";
import { useRoute } from "vue-router";

export const chatFunctions = async () => {
  const { firestore, user } = useAuth();
  const route = useRoute();
  const messages = ref([]);

  const userId = user.uid;

  const getChatId = (userId1, userId2) => {
    return [userId1, userId2].sort().join("_");
  };

  const sendMessage = async (message) => {
    console.log("Message sent:", message);
    const reciever = route.params.id;
    const chatId = getChatId(userId, reciever);
    console.log(reciever, userId);

    const tempMessage = {
      id: `temp_${Date.now()}`,
      senderId: userId,
      recipientId: reciever,
      message: message.value,
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
          lastMessage: message.value,
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
          message: message.value,
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
    } catch (e) {}
  };
  return {
    sendMessage,
  };
};
