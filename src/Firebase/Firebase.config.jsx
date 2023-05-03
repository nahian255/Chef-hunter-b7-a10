// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// console.log('enviroment dkf', import.meta.evn.VITE_apiKey)
const firebaseConfig = {
    apiKey: "AIzaSyAaOv9qLFRQ48UIABliEgWm8UueZB5-EHM",
    authDomain: "auth-project-a10.firebaseapp.com",
    projectId: "auth-project-a10",
    storageBucket: "auth-project-a10.appspot.com",
    messagingSenderId: "452497424545",
    appId: "1:452497424545:web:3090a1d70d80123b42b0e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;