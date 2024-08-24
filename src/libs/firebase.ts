import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendReservation(
    name: string,
    message: string,
    presence: string,
    accInvitees: string,
    guests: string
) {
  try {
    await addDoc(collection(db, "reservation"), {
      name: name,
      message: message,
      presence: presence,
      time: serverTimestamp(),
      accInvitees: accInvitees,
      guests: guests,
    });
  } catch (e) {
    alert(e);
  }
}

export { db, sendReservation };
