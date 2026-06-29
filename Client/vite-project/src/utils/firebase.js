// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyBkneeczUu9rxe1qoknIQkKSc8pYhROEr4",
  authDomain: "veloraai-d276a.firebaseapp.com",
  projectId: "veloraai-d276a",
  storageBucket: "veloraai-d276a.firebasestorage.app",
  messagingSenderId: "520877430086",
  appId: "1:520877430086:web:ef48c317f6591573b48147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)//jo app initialize hai usi mein toh authentication karna hai
const provider=new GoogleAuthProvider()
export {auth,provider}