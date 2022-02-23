import {signInWithEmailAndPassword, sendPasswordResetEmail, browserSessionPersistence, setPersistence,
        createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import axios from "axios"; 
import {db, auth} from "../utils/firebase"
import { handleErrors } from '../pages/Login'
import { handleErrors2 } from '../pages/SignUp'

function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user; 
    const uid = user.uid.toString();
    const email = user.email;
    console.log(uid);
    axios.post('/api/users/', {
      uid: uid,
      email: email,
    })
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    return handleErrors2(errorMessage);
    // ..
  });
}

//auth endpoint
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
    const errorMessage = error.message;
    return handleErrors(errorMessage);
  });
}

//auth endpoint
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

export {db, auth, createUser, signIn, resetPassword}
