// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7448YFT9lnfXZpthdo62qzqtoctWa_6Q",
  authDomain: "the-world-daily-news.firebaseapp.com",
  projectId: "the-world-daily-news",
  storageBucket: "the-world-daily-news.appspot.com",
  messagingSenderId: "64444941001",
  appId: "1:64444941001:web:10486ea32946fbfad20318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;