// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6a50UryrY67pa70puJwngoccs2fkQKVU",
  authDomain: "ecobazar-93e32.firebaseapp.com",
  projectId: "ecobazar-93e32",
  storageBucket: "ecobazar-93e32.firebasestorage.app",
  messagingSenderId: "374731575058",
  appId: "1:374731575058:web:74ea3a8cda2d747a7badcb",
  measurementId: "G-5BRN57Z192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth