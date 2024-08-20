import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZwXFVwzPt8ZELjykMD2uzO_hOvDqlc1A",
  authDomain: "wedding-application-c3259.firebaseapp.com",
  databaseURL: "https://wedding-application-c3259-default-rtdb.firebaseio.com",
  projectId: "wedding-application-c3259",
  storageBucket: "wedding-application-c3259.appspot.com",
  messagingSenderId: "337002873463",
  appId: "1:337002873463:web:852b95edc9c0dc830c7c72",
  measurementId: "G-RQZHQCKQVP",
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
