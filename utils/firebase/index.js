import 'firebase/auth'
import 'firebase/firestore'
import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import firebase from 'firebase/app';


const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

initializeApp(clientCredentials);
const db = getFirestore();
const auth = getAuth();

export {db, auth};