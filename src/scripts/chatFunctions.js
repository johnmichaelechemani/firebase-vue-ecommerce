import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  setDoc,
  doc,
  serverTimestamp,
  getFirestore,
} from "firebase/firestore";

import { ref, onMounted } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "@/firebase.auth";
import { userData } from "@/store";

// global
const { user, auth } = useAuth();
export const getChatId = (userId1, userId2) => {
  return [userId1, userId2].sort().join("_");
};
new Promise((resolve) => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
    unsubscribe();
    resolve();
  });
});

const firestore = getFirestore();
const userId = userData.value.userId;
export const messages = ref([]);
export const latestMessages = ref({});

//-----------------below is the functions-----------------------------
export const chatFunctions = () => {
  const unsubscribes = ref([]);

  const selectedMall = (mallId) => {
    loadMessages(mallId);
  };
  const message = ref("");

  const sendMessage = async (receiver) => {
    const chatId = getChatId(userId, receiver);
    const tempMessage = {
      id: `temp_${Date.now()}`,
      senderId: userId,
      recipientId: receiver,
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
            [receiver]: true,
          },
          lastMessage: message.value,
          sender: userId,
          receiver: receiver,
          timestamp: serverTimestamp(),
        },
        { merge: true }
      );

      const messageDoc = await addDoc(
        collection(firestore, `chats/${chatId}/messages`),
        {
          senderId: userId,
          recipientId: receiver,
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
      message.value = "";
    } catch (e) {
      console.error("Firebase message send error:", e);
    } finally {
      message.value = "";
    }
  };

  const loadMessages = (receiver) => {
    try {
      const chatId = getChatId(userId, receiver);
      const cachedMessages = localStorage.getItem(`messages_${chatId}`);
      messages.value = cachedMessages ? JSON.parse(cachedMessages) : [];
      const messagesQuery = query(
        collection(firestore, `chats/${chatId}/messages`),
        orderBy("timestamp", "asc")
      );
      const lastMessagesQuery = doc(firestore, "chats", chatId);
      const latestMessageUnsubscribe = onSnapshot(lastMessagesQuery, (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          if (data && data.lastMessage) {
            latestMessages.value[chatId] = data.lastMessage;
            // isSender.value[chatId] = data.sender;
            // timestamp.value[chatId] = data.timestamp;
          }
        }
      });
      const messageUnsubscribe = onSnapshot(
        messagesQuery,
        (snapshot) => {
          try {
            const liveMessages = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            messages.value = liveMessages;
            localStorage.setItem(
              `messages_${chatId}`,
              JSON.stringify(liveMessages)
            );
          } catch (mappingError) {
            console.error("❌ Message Mapping Error:", {
              error: mappingError.message,
              snapshot: snapshot.docs,
            });
          }
        },
        (snapshotError) => {
          console.error("❌ Snapshot Listener Error:", {
            error: snapshotError.message,
            query: messagesQuery,
          });
        }
      );
      unsubscribes.value.push(messageUnsubscribe);
      unsubscribes.value.push(latestMessageUnsubscribe);
    } catch (generalError) {
      console.error("❌ General Messages Loading Error:", {
        error: generalError.message,
        userId: userId,
        receiverId: receiver,
      });
    }
  };
  onMounted(() => {
    unsubscribes.value.forEach((unsubscribes) => unsubscribes());
    unsubscribes.value = [];
    loadMessages();
  });
  return {
    sendMessage,
    messages,
    message,
    selectedMall,
    getChatId,
    loadMessages,
  };
};
