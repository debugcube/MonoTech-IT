// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUovVWuxt1DER9zSQcZjuv-XAtaqJGbXk",
  authDomain: "monotech-ac259.firebaseapp.com",
  projectId: "monotech-ac259",
  storageBucket: "monotech-ac259.appspot.com",
  messagingSenderId: "576721540290",
  appId: "1:576721540290:web:0dd1abf58c5bb3b946d75b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
