// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRLdKhlhxlSynTXKvoHWkzC-ODKFr1jEs",
  authDomain: "easychat-2345c.firebaseapp.com",
  projectId: "easychat-2345c",
  storageBucket: "easychat-2345c.appspot.com",
  messagingSenderId: "467069975268",
  appId: "1:467069975268:web:a29879f602e69fca124af1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Firestore database
export const db = getFirestore(app);
