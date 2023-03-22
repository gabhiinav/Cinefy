import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQrX15POqadHoP3KZ5R9J3oxxPHBf2Xtc",
  authDomain: "cinefy-62358.firebaseapp.com",
  projectId: "cinefy-62358",
  storageBucket: "cinefy-62358.appspot.com",
  messagingSenderId: "145160558446",
  appId: "1:145160558446:web:12744a26387f42d2c7537f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
