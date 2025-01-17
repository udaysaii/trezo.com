import { initializeApp } from "firebase/app";
import { getAuth , signOut } from "firebase/auth"; // Import the getAuth function
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdvkWcfXeuNvsDJ7D9MbLv3KBsI66lx10",
  authDomain: "udaysai3204.firebaseapp.com",
  projectId: "udaysai3204",
  storageBucket: "udaysai3204.firebasestorage.app",
  messagingSenderId: "816479225374",
  appId: "1:816479225374:web:72fb367440085ff06c500f",
  measurementId: "G-EHDJ08S4KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize auth here

// Export auth
export { auth , signOut }; // Correctly export the auth object
