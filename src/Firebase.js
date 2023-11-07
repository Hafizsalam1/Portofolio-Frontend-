import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Z1bYtWzvCEXgLrw0QsMxvlXXYTae23w",
  authDomain: "hasals-web-portofolio.firebaseapp.com",
  projectId: "hasals-web-portofolio",
  storageBucket: "hasals-web-portofolio.appspot.com",
  messagingSenderId: "1086756369305",
  appId: "1:1086756369305:web:dfa49c1a2b7391266b9908",
  measurementId: "G-26RTDE5SW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);