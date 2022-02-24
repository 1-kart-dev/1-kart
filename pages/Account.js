import React from 'react'
import styles from '../styles/Home.module.scss'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { auth, firestore } from './index';
import { updateDoc, doc, collection, query, where, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from 'react';
import ActMenu from './ActMenu';

export default function Account() {
    const[email, setEmail] = useState('');
    const[last, setLast] = useState('');
    const[zip, setZip] = useState('');
    const[state, setState] = useState('');
    const[city, setCity] = useState('');
    const[first, setFirst] = useState('');
    const[uid, setUid] = useState('');
    const[userData, setUserData] = 
    useState({intFirst: '', intLast: '', intEmail: '', intCity: '', intState: '', intZip: ''  });
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUid(user.uid);
            } else {
              // User is signed out
              // ..
            }
        });
    });

    const q = query(collection(firestore, "Users"), where("uid", "==", uid));

    useEffect(() => {
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var data = doc.data();
                setUserData({ 
                    intFirst: data.first, intLast: data.last, intEmail: data.email,
                    intCity: data.city, intState: data.state, intZip: data.zip
                });
            });
        });
    });

    function onClick() {
        updateDoc(doc(firestore, "Users", uid), {
            first: first,
            last: last,
            city: city,
            state: state,
            zip: zip
        });
    }

    return (
        <div className = {styles.container}>
            <ActMenu />
            <div className = {styles.profile}>
                <div className = {styles.grid1}>
                    <h2>Edit Profile</h2>
                </div>
                <div className = {styles.grid2}>
                    <FormControl>
                        <label>First Name</label>
                        <OutlinedInput
                        value={first}
                        onInput = {e => setFirst(e.target.value)}
                        placeholder={userData.intFirst}
                        label = "First Name"/>
                    </FormControl>
                </div>
                <div className = {styles.grid3}>
                    <FormControl>
                        <label>Last Name</label>
                        <OutlinedInput
                        value = {last}
                        onInput = {e => setLast(e.target.value)}
                        placeholder={userData.intLast}
                        label = "Last Name"/>
                    </FormControl>
                </div>
                <div className = {styles.grid4}>
                    <FormControl>
                        <label>Email</label>
                        <OutlinedInput
                        value={email}
                        onInput = {e => setEmail(e.target.value)}
                        placeholder={userData.intEmail}
                        label = "Email"/>
                    </FormControl>
                </div>
                <div className = {styles.grid5}>
                    <FormControl>
                        <label>City</label>
                        <OutlinedInput
                        value = {city}
                        onInput = {e => setCity(e.target.value)}
                        placeholder={userData.intCity}
                        label = "City"/>
                    </FormControl>
                </div>
                <div className = {styles.grid6}>
                    <FormControl>
                        <label>State</label>
                        <OutlinedInput
                        value = {state}
                        onInput = {e => setState(e.target.value)}
                        placeholder={userData.intState}
                        label = "State"/>
                    </FormControl>
                </div>
                <div className = {styles.grid7}>
                    <FormControl>
                        <label>Zip</label>
                        <OutlinedInput
                        value = {zip}
                        onInput = {e => setZip(e.target.value)}
                        placeholder={userData.intZip}
                        label = "Zip"/>
                    </FormControl>
                </div>
                <div className = {styles.grid8}>
                    <Button className={styles.updateBtn} variant = "contained" color = "primary" onClick={onClick}>Update</Button>
                </div>
                <div className = {styles.grid9}>
                    <img className={styles.kartLogo} src = "../1kart circle.jpg" />
                </div>
            </div>
        </div>
    );
}