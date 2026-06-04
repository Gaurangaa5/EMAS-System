import { db } from "./firebase.js";
import { ref, onValue } from "firebase/database";

const textElement = document.getElementById("displayText");

onValue(ref(db, "emas/display"), (snapshot) => {

  const data = snapshot.val();

  if (data?.text) {
    textElement.textContent = data.text;
  } else {
    textElement.textContent = "NO MESSAGE";
  }

});