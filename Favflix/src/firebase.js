// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQzfwUhjN4QaVIwc6NsAXqvd75MQlpSIo",
  authDomain: "favflix-13463.firebaseapp.com",
  projectId: "favflix-13463",
  storageBucket: "favflix-13463.appspot.com",
  messagingSenderId: "565975025121",
  appId: "1:565975025121:web:aea4b2a6098be2dd523ea0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
