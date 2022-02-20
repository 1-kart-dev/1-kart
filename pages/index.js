import React from 'react'
import styles from '../styles/Home.module.scss'
import HomePage from './HomePage'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {sendPasswordResetEmail, browserSessionPersistence, setPersistence} from 'firebase/auth'
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 

initializeApp({
  apiKey: "AIzaSyC6qrSTPE2DG1GIv42CRNPivqxq7kRdVJs",
  authDomain: "kart-8df20.firebaseapp.com",
  projectId: "kart-8df20",
  storageBucket: "kart-8df20.appspot.com",
  messagingSenderId: "597913451329",
  appId: "1:597913451329:web:3ea9f8971c6f7183f5ffc0",
  measurementId: "G-CWPFFLWJV5"
});

const firestore = getFirestore();
const auth = getAuth();

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  )
}

function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user; 
    const uid = user.uid.toString();
    const email = user.email;
    setDoc(doc(firestore, "Users", uid), {
      uid: uid,
      email: email,
      first: 'null',
      last: '',
      city: '',
      state: '',
      zip: ''
    })
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

function signIn(email, password) {
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

function resetPassword(email) {
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export {firestore, auth, createUser, signIn, resetPassword}
