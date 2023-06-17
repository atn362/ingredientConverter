// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1YVk-ilsomtJg7ZIFJfSyHOv2qIX7_Mc",
  authDomain: "ingredient-converter.firebaseapp.com",
  databaseURL: "https://ingredient-converter-default-rtdb.firebaseio.com",
  projectId: "ingredient-converter",
  storageBucket: "ingredient-converter.appspot.com",
  messagingSenderId: "861961081875",
  appId: "1:861961081875:web:b9b614ed6b64039bae9be6",
  measurementId: "G-E16KH2R163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);