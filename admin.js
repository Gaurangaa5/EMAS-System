import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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

const input = document.getElementById("inputText");
const syncBtn = document.getElementById("syncBtn");
const clearBtn = document.getElementById("clearBtn");
const previewText = document.getElementById("previewText");
const status = document.getElementById("status");

function syncMessage() {
  const message = input.value.trim();

  if (message === "") {
    status.textContent = "MESSAGE IS EMPTY";
    return;
  }

  set(ref(db, "emas/display"), {
    text: message
  })
    .then(() => {
      previewText.textContent = message;
      status.textContent = "SYNC SUCCESSFUL";

      input.value = "";
    })
    .catch((error) => {
      console.error(error);
      status.textContent = "SYNC FAILED";
    });
}

// Live preview while typing
input.addEventListener("input", () => {
  previewText.textContent = input.value || "---";
});

// Sync button
syncBtn.addEventListener("click", syncMessage);

// Press Enter to sync
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    syncMessage();
  }
});

// Clear button
clearBtn.addEventListener("click", () => {
  input.value = "";
  previewText.textContent = "---";
  status.textContent = "READY";
});
