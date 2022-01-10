import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import dynamic from 'next/dynamic'
import HomePage from './HomePage'
import Link from 'next/link'
import * as firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyC6qrSTPE2DG1GIv42CRNPivqxq7kRdVJs",
  authDomain: "kart-8df20.firebaseapp.com",
  projectId: "kart-8df20",
  storageBucket: "kart-8df20.appspot.com",
  messagingSenderId: "597913451329",
  appId: "1:597913451329:web:3ea9f8971c6f7183f5ffc0",
  measurementId: "G-CWPFFLWJV5"
})

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
