// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth,GoogleAuthProvider} from "firebase/auth";
import{getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD68UlApJiUGOir4vsdVxGQkyMvaI9ibhI",
  authDomain: "expense-tracker-ca1c2.firebaseapp.com",
  projectId: "expense-tracker-ca1c2",
  storageBucket: "expense-tracker-ca1c2.appspot.com",
  messagingSenderId: "656433917276",
  appId: "1:656433917276:web:fece10760764b69d12a599",
  measurementId: "G-SK1XEB62HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);