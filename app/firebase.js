// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBElc1nY2TFECvXsXDXjUbc9kfmNDoCVo8",
  authDomain: "nextjs-auth-project2.firebaseapp.com",
  projectId: "nextjs-auth-project2",
  storageBucket: "nextjs-auth-project2.appspot.com",
  messagingSenderId: "207079154249",
  appId: "1:207079154249:web:c2c9dea0aa0a009f7b9598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);