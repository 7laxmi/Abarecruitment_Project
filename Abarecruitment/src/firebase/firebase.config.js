// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDJIMacNfz9ha3-hwbAOTEdj2hUvvoHZM",
  authDomain: "abarecruitment-4a7ff.firebaseapp.com",
  projectId: "abarecruitment-4a7ff",
  storageBucket: "abarecruitment-4a7ff.appspot.com",
  messagingSenderId: "188152307341",
  appId: "1:188152307341:web:62c5ab5ae3ac5214c74cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;