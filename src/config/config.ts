// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBo8zZoPResgtkcs51Da5GXfGpNaUv-QcY",
  authDomain: "carefinderapp-469f9.firebaseapp.com",
  projectId: "carefinderapp-469f9",
  storageBucket: "carefinderapp-469f9.appspot.com",
  messagingSenderId: "835427542932",
  appId: "1:835427542932:web:85d8494394b02f3cea9181",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
