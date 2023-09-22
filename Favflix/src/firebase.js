import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQzfwUhjN4QaVIwc6NsAXqvd75MQlpSIo",
  authDomain: "favflix-13463.firebaseapp.com",
  projectId: "favflix-13463",
  storageBucket: "favflix-13463.appspot.com",
  messagingSenderId: "565975025121",
  appId: "1:565975025121:web:aea4b2a6098be2dd523ea0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
