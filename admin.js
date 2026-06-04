import { db } from "./firebase.js";
import { ref, set } from "firebase/database";

const input = document.getElementById("inputText");
const button = document.getElementById("syncBtn");

button.addEventListener("click", async () => {

  await set(ref(db, "emas/display"), {
    text: input.value
  });

  alert("Synced!");
});