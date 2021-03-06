import styles from '../styles/Home.module.scss'
import Button from "@mui/material/Button"
import EditIcon from "@mui/icons-material/Edit"
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline"
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../lib/auth'
import axios from "axios";
import LoggedIn from './LoggedIn';

export default function CreateSK() {
    const [kart, setKart] = useState({
        kart_name: "",
        items: [],
        uid: ""
    });

    useEffect(() => onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("currentUser:" + user.email)
            setKart({...kart, uid: user.uid});
        }
    }), [])

    const submitForm = async (e) => {
        e.preventDefault();
        axios.post(`/api/kart/`, kart)
    };

    return (
        <LoggedIn>
        <div className={styles.container}>
            <div className = {styles.kartContainer}>
                <form className={styles.form} onSubmit={submitForm}>
                    <h3>Create Subkart</h3>
                    <input placeholder="Name" 
                    className={styles.input1} 
                    onChange={(e) => {
                        setKart({ ...kart, kart_name: e.target.value });
                    }}></input>
                    <select placeholder="Items" className={styles.input1}>
                        <option value="" disabled="disabled" selected="selected">
                            Select items
                        </option>  
                    </select>
                    <input value="Submit" className={styles.input1} type="submit" />
                </form>
            </div>
        </div>
        </LoggedIn>
    );
}