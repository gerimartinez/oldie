// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP0VngPo6ZBOtAxFNiCQm9c0ITtdUVNYk",
  authDomain: "oldie-a25dc.firebaseapp.com",
  projectId: "oldie-a25dc",
  storageBucket: "oldie-a25dc.appspot.com",
  messagingSenderId: "580624638936",
  appId: "1:580624638936:web:1e94e7b8dd5cb7636148ad",
  measurementId: "G-V58J76ZXM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)