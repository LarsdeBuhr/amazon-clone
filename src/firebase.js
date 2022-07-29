// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyCBlLhruLNeUG4_fQ-Vk3YnZHZuHP9yuDc",
   authDomain: "challenge-f67dc.firebaseapp.com",
   projectId: "challenge-f67dc",
   storageBucket: "challenge-f67dc.appspot.com",
   messagingSenderId: "1057223958241",
   appId: "1:1057223958241:web:1c7c5ff2912200f8c521a0",
   measurementId: "G-N95WW9VKJN"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 
 export { db, auth };