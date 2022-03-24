import React from 'react'
import styles from './NewAccount.module.scss';
import LoggedIn from '../LoggedIn';
import LandingFooter from '../../components/LandingFooter'
import Navbar from '../../components/Navbar';


export default function Warranties() {
    return(
        <LoggedIn>
        <div className={styles.container}>
            <div className={styles.Warranties}>
                <Navbar></Navbar>
                <h2>Warranties (Coming soon!)</h2>
                <p>
                    The warranties page will organize the warranties on the items you purchase through 1Kart. 
                    Warranties are an important part of e-commerce to ensure customer satisfaction. We want to remove the hassle of finding specific warranty plans by congregating them all into one place. We are looking forward to sharing these features with you soon! - The 1Kart team
                </p>
            </div>
            <LandingFooter></LandingFooter>
        </div>
        </LoggedIn>
    );
}