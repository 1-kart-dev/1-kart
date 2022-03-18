import React from 'react'
import styles from '../../styles/Home.module.scss'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { auth } from '../../lib/auth';
import { onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from 'react';
import ActMenu from './ActMenu';
import axios from 'axios';
import LoggedIn from '../LoggedIn';

export default function Account() {
    const[formData, setFormData] = useState({});
    const[uid, setUid] = useState('');
    const[userData, setUserData] = 
    useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUid(user.uid);
            } else {
              // User is signed out
              // ..
            }
        });
    }, []);

    useEffect(() => {
        if(uid != '') {
            axios.get(`/api/users/${uid}`).then((res) => {
                setUserData(res.data);
             })
        }
    }, [uid]);
        
    const onClick = async (e) => {
        e.preventDefault();
        await axios.put(`/api/users/${uid}`, formData);
    }

    return (
        <LoggedIn>
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
                            onInput = {e => setFormData({...formData, first: e.target.value})}
                            placeholder={userData.first}
                            label = "First Name"/>
                        </FormControl>
                    </div>
                    <div className = {styles.grid3}>
                        <FormControl>
                            <label>Last Name</label>
                            <OutlinedInput
                            value = {formData.last}
                            onInput = {e => setFormData({...formData, last: e.target.value})}
                            placeholder={userData.last}
                            label = "Last Name"/>
                        </FormControl>
                    </div>
                    <div className = {styles.grid4}>
                        <FormControl>
                            <label>Email</label>
                            <OutlinedInput
                            value={formData.email}
                            onInput = {e => setFormData({...formData, email: e.target.value})}
                            placeholder={userData.email}
                            label = "Email"/>
                        </FormControl>
                    </div>
                    <div className = {styles.grid5}>
                        <FormControl>
                            <label>City</label>
                            <OutlinedInput
                            value = {formData.city}
                            onInput = {e => setFormData({...formData, city: e.target.value})}
                            placeholder={userData.city}
                            label = "City"/>
                        </FormControl>
                    </div>
                    <div className = {styles.grid6}>
                        <FormControl>
                            <label>State</label>
                            <OutlinedInput
                            value = {formData.state}
                            onInput = {e => setFormData({...formData, state: e.target.value})}
                            placeholder={userData.state}
                            label = "State"/>
                        </FormControl>
                    </div>
                    <div className = {styles.grid7}>
                        <FormControl>
                            <label>Zip</label>
                            <OutlinedInput
                            value = {formData.zip}
                            onInput = {e => setFormData({...formData, zip: e.target.value})}
                            placeholder={userData.zip}
                            label = "Zip"/>
                        </FormControl>
                    </div>
                    <div className = {styles.grid8}>
                        <Button className={styles.updateBtn} variant = "contained" color = "primary" onClick={onClick}>Update</Button>
                    </div>
                    <div className = {styles.grid9}>
                        {/*<img className={styles.kartLogo} src = "../1kart circle.jpg" />*/}
                    </div>
                </div>
            </div>
        </LoggedIn>
    );
}