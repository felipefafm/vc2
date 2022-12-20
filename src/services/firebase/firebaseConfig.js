import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsNFTWgwhn0DGl2ytT5eJisG-Zo_nJfvk",
  authDomain: "vc2pro.firebaseapp.com",
  projectId: "vc2pro",
  storageBucket: "vc2pro.appspot.com",
  messagingSenderId: "35671718149",
  appId: "1:35671718149:web:76ff19a346f7d32e089f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)