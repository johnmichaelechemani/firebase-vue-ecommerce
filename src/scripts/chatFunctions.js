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

import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "@/firebase.auth";

// global
const { user, auth } = useAuth();
const getChatId = (userId1, userId2) => {
  return [userId1, userId2].sort().join("_");
};
await new Promise((resolve) => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
    unsubscribe();
    resolve();
  });
});

const route = useRoute();
const firestore = getFirestore();
const userId = user.value.uid;

//-----------------below is the functions-----------------------------
export const chatFunctions = () => {
  const messages = ref([]);

  const selectedMall = (mallId) => {
    console.log("🔍 Selected Mall:", mallId);
    console.log("🔍 messages in Mall:", messages.value);
    loadMessages(mallId);
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

  const loadMessages = (reciever) => {
    console.log("🔍 Loading reciever:", reciever);
    try {
      // Generate unique chat ID
      const chatId = getChatId(userId, reciever);

      // 🔍 Cached Messages Retrieval
      const cachedMessages = localStorage.getItem(`messages_${chatId}`);

      messages.value = JSON.parse(cachedMessages);
      console.log("✅ Cached Messages Retrieved:", {
        count: messages.value.length,
        messages: messages.value,
      });

      // 📡 Real-time Firestore Message Query
      const messagesQuery = query(
        collection(firestore, `chats/${chatId}/messages`),
        orderBy("timestamp", "asc")
      );

      // 🔄 Real-time Listener Setup
      const messageUnsub = onSnapshot(
        messagesQuery,
        (snapshot) => {
          try {
            // Transform snapshot to messages array
            const liveMessages = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            console.log("🌐 Live Messages Snapshot:", {
              count: liveMessages.length,
              messages: liveMessages,
            });

            // Update messages reactive value
            messages.value = liveMessages;

            // 💾 Local Storage Update

            localStorage.setItem(
              `messages_${chatId}`,
              JSON.stringify(liveMessages)
            );
            console.log("💾 Messages Cached Successfully");
          } catch (mappingError) {
            console.error("❌ Message Mapping Error:", {
              error: mappingError.message,
              snapshot: snapshot.docs,
            });
          }
        },
        (snapshotError) => {
          // Handle snapshot listener error
          console.error("❌ Snapshot Listener Error:", {
            error: snapshotError.message,
            query: messagesQuery,
          });
        }
      );

      // 🧹 Cleanup listener on component unmount
      onUnmounted(() => {
        messageUnsub();
      });
    } catch (generalError) {
      console.error("❌ General Messages Loading Error:", {
        error: generalError.message,
        userId: userId,
        receiverId: reciever,
      });
    }
  };

  // 🚀 Auto-trigger message loading
  onMounted(() => {
    loadMessages();
    console.log("🔍 Messages Loading Initiated");
  });
  return {
    sendMessage,
    messages,
    selectedMall,
  };
};
