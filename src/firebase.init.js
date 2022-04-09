// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD95D72kaZCmR1ESPXsqA1A3Z1r10Y6MbA",
  authDomain: "ema-john-simple-60e56.firebaseapp.com",
  projectId: "ema-john-simple-60e56",
  storageBucket: "ema-john-simple-60e56.appspot.com",
  messagingSenderId: "947350227389",
  appId: "1:947350227389:web:07b2c3ec9319cbe8746ad4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
