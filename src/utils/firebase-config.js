import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDM_bGk_C77c6MxGkcVWU_6cuXnBSyXnDI",
  authDomain: "react-netflix-clone-2cda4.firebaseapp.com",
  projectId: "react-netflix-clone-2cda4",
  storageBucket: "react-netflix-clone-2cda4.appspot.com",
  messagingSenderId: "484546161999",
  appId: "1:484546161999:web:0d6e9a8f0c43ef9d89293a",
  measurementId: "G-ZT8W23PP4D"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
