import React from 'react'
import styles from '../styles/Home.module.scss'
import ActMenu from './ActMenu';

export default function ActSecurity() {
    return(
        <div className = {styles.container}>
            <ActMenu />
            <div className = {styles.security}>
                <h2>Data Security</h2>
                <img className={styles.kartLogo} src = "../1kart circle.jpg"/>
                <p>
                    The internet is a scary place, and data breaches that could expose your private information
                    do occur. At 1Kart, our database is powered by Google Firebase, and in order you to 
                    maximize security we follow their best practices which can be found <a href='https://firebase.google.com/support/guides/security-checklist'>here.</a> Information 
                    like addresses and forms of payment are given greater security to ensure
                    any unwanted eyes cannot see it. However, if a data breach were to occur we would alert
                    you immediately as well as providing ways that we will improve as well as ways to remove
                    it from the public. 
                </p>
                <p>
                    For more information on Google Firebase&apos;s security protocols please visit this <a href='https://firebase.google.com/support/privacy'>site.</a> If 
                    you have questions not addressed by Google or this page, please find our 
                    contact information on the about page! - The 1Kart Team
                </p>
            </div>
        </div>
    );
}