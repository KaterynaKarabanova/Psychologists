import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyBmPoUwQKbxV0Wu48qhTt19crBvuWISDuc",
  authDomain: "psychologists-53a2a.firebaseapp.com",
  projectId: "psychologists-53a2a",
  storageBucket: "psychologists-53a2a.appspot.com",
  messagingSenderId: "714839820671",
  appId: "1:714839820671:web:48d919c6a1289a05dc324a",
  databaseURL:
    "https://psychologists-53a2a-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
