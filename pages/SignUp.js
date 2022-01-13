import React from 'react';
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useState } from 'react'

export default function SignUp() {

    const [username, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conf, setConf] = useState('');

    const submitUser = async() => {
        if (password !== conf) {
            window.alert("Passwords do not match.");
            return;
        }
        var len = password.length;
        if (len < 8) {
            window.alert("Password must be at least 8 characters long.");
            return;
        }
        var noCap = true;
        var noUnd = true;
        var noSpec = true;
        for (var i = 0; i < len; i++) {
            var charCode = password.charCodeAt(i);
            if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
                noCap = false;
            } else if (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) {
                noUnd = false;
            } else if (charCode >= '!'.charCodeAt(0) && charCode <= '/'.charCodeAt(0)) {
                noSpec = false;
            } else if (charCode >= ':'.charCodeAt(0) && charCode <= '@'.charCodeAt(0)) {
                noSpec = false;
            } else if (charCode >= '['.charCodeAt(0) && charCode <= '`'.charCodeAt(0)) {
                noSpec = false;
            }
        }
        if (noCap) {
            if (noUnd) {
                if (noSpec) {
                    window.alert("Password must contain an uppercase letter, a lowercase letter, and a special character.");
                    return;
                }
                window.alert("Password must contain an uppercase letter and a lowercase letter.");
                return;
            }
            if (noSpec) {
                window.alert("Password must contain an uppercase letter and a special character.");
                return;
            }
            window.alert("Password must contain an uppercase letter.");
            return;
        }
        if (noUnd) {
            if (noSpec) {
                window.alert("Password must contain a lowercase letter and a special character.");
                return;
            }
            window.alert("Password must contain a lowercase letter.");
            return;
        }
        if (noSpec) {
            window.alert("Password must contain a special character.");
            return;
        }

        var id = Date.now();
        const response = await fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({username, name, email, password, id}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
    }

    return(
        <div className={styles.main}>
            <div className = {styles.formPage}>
                <div className = {styles.formContainer}>
                    <form>
                        <h2>Sign Up</h2>

                        <div className = {styles.form1}>
                            <label for="username">Username:</label><br></br>
                            <input className={styles.input1}
                                type='text'
                                value={username}
                                onChange={e => setUser(e.target.value)}
                            /><br></br>
                        </div>

                        <div className = {styles.form1}>
                            <label for="name">Name:</label><br></br>
                            <input className={styles.input1}
                                type='text'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            /><br></br>
                        </div>

                        <div className = {styles.form2}>
                            <label for="email">Email Address:</label><br></br>
                            <input className={styles.input2}
                                type='text'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            /><br></br>
                        </div>

                        <div className = {styles.form3}>
                            <label for="password">Enter Password:</label><br></br>
                            <input className={styles.input3}
                                type='text'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            /><br></br>
                        </div>

                        <div className = {styles.form3}>
                            <label for="confirm">Confirm Password:</label><br></br>
                            <input className={styles.input4}
                                type='text'
                                value={conf}
                                onChange={e => setConf(e.target.value)}
                            /><br></br>
                        </div>

                        <button onClick={submitUser} className = {styles.formSubmit}>Submit</button>
                        <p className={styles.formText}>Already have an account? <a className = {styles.loginLink}><Link href = '/Login'>Login here.</Link></a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}