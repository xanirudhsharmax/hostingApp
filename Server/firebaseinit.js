// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG6O9FDdgozVl6lqA4NsoIueUSYTu03eU",
  authDomain: "assignment1-22816.firebaseapp.com",
  projectId: "assignment1-22816",
  storageBucket: "assignment1-22816.appspot.com",
  messagingSenderId: "241353398261",
  appId: "1:241353398261:web:4219d6e3ea7df9107832bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;