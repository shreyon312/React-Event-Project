// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX5NzsRqaKX7yVqOYWrA8zPfHIGjArct0",
  authDomain: "event-management-d94d9.firebaseapp.com",
  projectId: "event-management-d94d9",
  storageBucket: "event-management-d94d9.appspot.com",
  messagingSenderId: "617856658181",
  appId: "1:617856658181:web:d3b522f74cad1effaae56c",
  measurementId: "G-HQ4WL8C6WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);