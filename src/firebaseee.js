// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7aa3aXWW_0s1UKfYlolKYaPH4-04vARI",
  authDomain: "loginsignup-2d4fa.firebaseapp.com",
  projectId: "loginsignup-2d4fa",
  storageBucket: "loginsignup-2d4fa.appspot.com",
  messagingSenderId: "720429784159",
  appId: "1:720429784159:web:f55269fb533c3711be4fea",
  measurementId: "G-PLGE2XB305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);