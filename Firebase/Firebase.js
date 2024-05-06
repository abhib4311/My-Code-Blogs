// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAxoSq9Dylqc17v6dv8Yoa_t28KtWJMxlI",
  authDomain: "bitsofcode-59a7a.firebaseapp.com",
  projectId: "bitsofcode-59a7a",
  storageBucket: "bitsofcode-59a7a.appspot.com",
  messagingSenderId: "471064809522",
  appId: "1:471064809522:web:82ce2b144b142d3fbd2c2b",
  measurementId: "G-CLW9EPHYJR"
};

const app = initializeApp(firebaseConfig);

// for navbar

// Initialize Firebase
const db = getFirestore(app);

export default app;
