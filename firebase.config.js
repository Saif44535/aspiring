import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3IXyFQFyEsbTmBbQM9sk9NBpt-mjOKN8",
  authDomain: "aspiring-future-consulta-39f31.firebaseapp.com",
  projectId: "aspiring-future-consulta-39f31",
  storageBucket: "aspiring-future-consulta-39f31.appspot.com",
  messagingSenderId: "119455747855",
  appId: "1:119455747855:web:37e5386209c0a21a05b87a",
  measurementId: "G-CG5X9TRWHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
