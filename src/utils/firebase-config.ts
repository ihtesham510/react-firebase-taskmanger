// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFPKDOENHGR_dYGiLK3g54V_e-SFg1wuQ",
  authDomain: "react-taskmanger.firebaseapp.com",
  databaseURL: "https://react-taskmanger-default-rtdb.firebaseio.com",
  projectId: "react-taskmanger",
  storageBucket: "react-taskmanger.appspot.com",
  messagingSenderId: "880705439896",
  appId: "1:880705439896:web:c7b4e3e025e6d8f402e8ed",
  measurementId: "G-B64VP30C7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) // create an auth
export const googleAuth = new GoogleAuthProvider() // create a new google authentication provider
