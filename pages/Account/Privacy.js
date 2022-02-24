import React from 'react'
import styles from '../../styles/Home.module.scss'
import LoggedIn from '../LoggedIn';
import ActMenu from './ActMenu';
import logo from '../../public/1kartCircle.jpg';
import Image from 'next/image'

export default function ActPriv() {
    return(
        <LoggedIn>
        <div className = {styles.container}>
            <ActMenu />
            <div className = {styles.privacy}>
                <h2>Personal Privacy</h2>
                {/*<Image src={logo} width="70px" height="70px" alt="logo" className={styles.image}/>*/}
                <p>
                    At 1Kart your privacy is our top concern. For that reason, we allow you to 
                    control what information you give us. When you create an account the only information
                    we store is your first and last name as well as your email associated with the account, 
                    unless you elect to give us more.
                </p>
                <p>
                    While we would like you to create an account with us, you may use our services anonymously 
                    for the utmost privacy. Additionally, 1Kart will have access to sensitive information such 
                    as payment information and addresses. For ease of use, you can allow 1Kart to store this 
                    information, and we have policies in place to keep this information protected, but you will
                    never be forced to give us this.
                </p>
                <p>
                    For questions regarding our data security policies, please see the Security page on the menu.
                    If you have additional questions regarding privacy, find our contact information in the About 
                    page below and we would be happy to answer any questions you may have.
                    - The 1Kart Team
                </p>
            </div>
        </div>
        </LoggedIn>
    );
}