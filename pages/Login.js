import React from 'react';
import { useFormik } from 'formik';
import styles from '../styles/Home.module.scss'

export default function Login() {
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
                                name="email"
                                type="email"
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

                        <button type="submit" className = {styles.formLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}