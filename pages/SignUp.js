import React, { useState } from 'react';
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { createUser } from './index'

export default function SignUp() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState('');

    return(
        <div className={styles.main}>
            <div className = {styles.formPage}>
                <div className = {styles.formContainer}>
                    <form>
                        <h2>Sign Up</h2>

                        <div className = {styles.form1}>
                            <label for="username">Username:</label><br></br>
                            <input className={styles.input1}
                                id="username"
                                name="name"
                                type="text"
                            /><br></br>
                        </div>

                        <div className = {styles.form1}>
                            <label for="name">Name:</label><br></br>
                            <input className={styles.input1}
                                id="name"
                                name="name"
                                type="text"
                            /><br></br>
                        </div>

                        <div className = {styles.form2}>
                            <label for="email">Email Address:</label><br></br>
                            <input className={styles.input2}
                                id="email"
                                type="email"
                                value={email}
                                onInput={e => setEmail(e.target.value)}
                            /><br></br>
                        </div>

                        <div className = {styles.form3}>
                            <label for="password">Enter Password:</label><br></br>
                            <input className={styles.input3}
                                id="password"
                                name="password"
                                type="password"
                            /><br></br>
                        </div>

                        <div className = {styles.form3}>
                            <label for="confirm">Confirm Password:</label><br></br>
                            <input className={styles.input4}
                                id="confirm"
                                value={password}
                                type="password"
                                onInput={e => setPassword(e.target.value)}
                            /><br></br>
                        </div>

                        <button type="submit" className={styles.formSubmit} onClick={createUser(email, password)}>Submit</button>
                        <p className={styles.formText}>Already have an account? <a className = {styles.loginLink}><Link href = '/Login'>Login here.</Link></a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}