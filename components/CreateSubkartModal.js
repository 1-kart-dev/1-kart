import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Modal from '@mui/material/Modal';
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../pages/index'

export default function CreateSubkartModal(props) {
    const [kart, setKart] = useState({
        kart_id: "",
        kart_name: "",
        item_ids: [],
        uid: ""
    });

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if(user) {
    //             setKart({...kart, uid: user.uid})
    //         } 
    //     }
    //     )
    // })

    const submitForm = async (e) => {
        e.preventDefault();
        axios.post(`/api/kart/`, kart)
    };
    return (
        <Modal open = {props.show} onClose={props.onHide}>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={submitForm}>
                    <h3>Create Subkart</h3>
                    <input placeholder="Kart Id" 
                    className={styles.input1} 
                    onChange={(e) => {
                        setKart({ ...kart, kart_id: e.target.value });
                    }}></input>
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
        </Modal>
    )
}
