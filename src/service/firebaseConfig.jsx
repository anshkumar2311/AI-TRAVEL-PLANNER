// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2vGamzHgbsmBYwhlEiLc9r879O-8ivX0",
  authDomain: "ai-travel-planner-a796e.firebaseapp.com",
  projectId: "ai-travel-planner-a796e",
  storageBucket: "ai-travel-planner-a796e.firebasestorage.app",
  messagingSenderId: "796207952706",
  appId: "1:796207952706:web:6b7e8debc931b656fbcedb",
  measurementId: "G-98Z8YDY892"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
