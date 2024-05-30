// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "visioncrop-d5074.firebaseapp.com",
  projectId: "visioncrop-d5074",
  storageBucket: "visioncrop-d5074.appspot.com",
  messagingSenderId: "986999131002",
  appId: "1:986999131002:web:efdda3fc572d29aabfa4c3",
  measurementId: "G-N8TEF43HCG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
