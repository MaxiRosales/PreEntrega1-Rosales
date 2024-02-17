
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCTFbYNO2riFWJV__HUJbXVqK1c6d4rOx4",
  authDomain: "ninja-games-store.firebaseapp.com",
  projectId: "ninja-games-store",
  storageBucket: "ninja-games-store.appspot.com",
  messagingSenderId: "388849269482",
  appId: "1:388849269482:web:d46457434d0681b76c7593"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);