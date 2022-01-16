import React, {useState} from 'react';
import styles from '../styles/Home.module.scss'
import {signIn} from './index'

export default function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState('');

    return(
        <div className={styles.main}>
            <div className = {styles.formPage}>
                <div className = {styles.formContainer}>
                    <form>
                        <h2>Login</h2>
                        <div className = {styles.form2}>
                            <label for="email">Email Address:</label><br></br>
                            <input className={styles.input2}
                                id="email"
                                type="email"
                                onInput={e => setEmail(e.target.value)}
                            /><br></br>
                        </div>

                        <div className = {styles.form3}>
                            <label for="password">Enter Password:</label><br></br>
                            <input className={styles.input3}
                                id="password"
                                type="password"
                                onInput={e => setPassword(e.target.value)}
                            /><br></br>
                        </div>

                        <button type="submit" className = {styles.formLogin} onClick={signIn(email, password)}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}