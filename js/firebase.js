import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJaaLX5pAU2jY5sKOYmgtbBvWlh70EaAs",
  authDomain: "riffat-blog.firebaseapp.com",
  projectId: "riffat-blog",
  storageBucket: "riffat-blog.firebasestorage.app",
  messagingSenderId: "47240531430",
  appId: "1:47240531430:web:a267b074e1535fa3ff9a27"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
