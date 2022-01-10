import React from 'react';
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function SignUp() {
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

                        <div className = {styles.form3}>
                            <label for="confirm">Confirm Password:</label><br></br>
                            <input className={styles.input4}
                                id="confirm"
                                name="confirm"
                                type="password"
                            /><br></br>
                        </div>

                        <button type="submit" className = {styles.formSubmit}>Submit</button>
                        <p className={styles.formText}>Already have an account? <a className = {styles.loginLink}><Link href = '/Login'>Login here.</Link></a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}