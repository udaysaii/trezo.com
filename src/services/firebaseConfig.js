import { initializeApp } from "firebase/app";
import { getAuth , signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQknSsBQ2sByrc8vpUoqUrZeCdHhFvUBc",
  authDomain: "uday04sai.firebaseapp.com",
  projectId: "uday04sai",
  storageBucket: "uday04sai.firebasestorage.app",
  messagingSenderId: "559808539203",
  appId: "1:559808539203:web:801c4699ad3cc1252442f6",
  measurementId: "G-GKXXWNJP95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize auth here

// Export auth
export { auth , signOut }; // Correctly export the auth object
