import React from 'react';
import { useFormik } from 'formik';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function SignUp() {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        }
    });
    return(
        <div className = {styles.formPage}>
            <div className = {styles.formContainer}>
                <form>
                    <h2>Sign Up</h2>
                    <div className = {styles.form1}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formik.values.firstName}
                        />
                    </div>

                    <div className = {styles.form2}>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formik.values.lastName}
                        />
                    </div>

                    <div className = {styles.form3}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formik.values.email}
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <p>Already have an account? <Link href = '/Login'>Login here.</Link></p>
                </form>
            </div>
        </div>
    );
}