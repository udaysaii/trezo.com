import { initializeApp } from "firebase/app";
import { getAuth , signOut } from "firebase/auth"; // Import the getAuth function
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIq8L0-v6he2cJ2pRBvxL3_40GKxaFmVQ",
  authDomain: "e-commerce-app-fc8f8.firebaseapp.com",
  projectId: "e-commerce-app-fc8f8",
  storageBucket: "e-commerce-app-fc8f8.firebasestorage.app",
  messagingSenderId: "968973967211",
  appId: "1:968973967211:web:c0b230599f51c6d6c3362e",
  measurementId: "G-XT49LN4R99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize auth here

// Export auth
export { auth , signOut }; // Correctly export the auth object
