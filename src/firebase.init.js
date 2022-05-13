// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDALAB6o3D2Xe5sj6FQsBYnyq7Bopk5anI",
  authDomain: "doctors-portal-94006.firebaseapp.com",
  projectId: "doctors-portal-94006",
  storageBucket: "doctors-portal-94006.appspot.com",
  messagingSenderId: "934111931629",
  appId: "1:934111931629:web:e6437785dd4ce9676ef0e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
