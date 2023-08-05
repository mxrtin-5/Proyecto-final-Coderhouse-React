// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAud6oBN6z3CmO-KpPOm1lnQwC1Wxepm8c",
    authDomain: "react-final-proyect.firebaseapp.com",
    projectId: "react-final-proyect",
    storageBucket: "react-final-proyect.appspot.com",
    messagingSenderId: "428775776969",
    appId: "1:428775776969:web:6be1a2a2c82fae35512318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
