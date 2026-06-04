import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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
const db = getDatabase(app);

const text = document.getElementById("displayText");

onValue(ref(db, "emas/display"), (snapshot) => {
  const data = snapshot.val();
  console.log("DATA:", data);

  text.innerText = data?.text || "WAITING...";
});
