import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDTexhEk_vhwe9X0lR4_hXE2kiZ9puTx5w",
  authDomain: "emas-system.firebaseapp.com",
  databaseURL: "https://emas-system-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "emas-system",
  storageBucket: "emas-system.firebasestorage.app",
  messagingSenderId: "1004123239278",
  appId: "1:1004123239278:web:eca24f9c6304eae643077f"
};

const app = initializeApp(firebaseConfig);

export default app;
export const db = getDatabase(app);