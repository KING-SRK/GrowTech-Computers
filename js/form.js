// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI8FxDlILMR93AD69_E48qwMKJuSUqFXg",
  authDomain: "digital-solutions-ae7ad.firebaseapp.com",
  databaseURL: "https://digital-solutions-ae7ad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "digital-solutions-ae7ad",
  storageBucket: "digital-solutions-ae7ad.firebasestorage.app",
  messagingSenderId: "761041929019",
  appId: "1:761041929019:web:d228c928c6bd40ea4fed1e",
  measurementId: "G-CS3VEXXEL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);