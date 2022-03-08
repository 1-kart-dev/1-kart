import React from 'react'
import styles from './NewAccount.module.scss';
import LoggedIn from '../LoggedIn';
import logo from '../../public/1kartCircle.jpg';
import Image from 'next/image'

export default function OrderHistory() {
    return(
        <LoggedIn>
        <div className = {styles.container}>
            <div className = {styles.history}>
                <h2>Coming Soon</h2>
                {/*<Image src={logo} width="70px" height="70px" alt="logo" className={styles.image}/>*/}
                <p>
                    The History page will allow our users to see their past purchases as well as
                    any warranties they may have purchased with a specific item. They will also be able to
                    see the date the items were purchased, what site they were purchased from, when they were 
                    delivered, or when they are expected to be delivered. We can&apos;t wait to bring you these
                    features along with others to our History page and hope to have it out soon!
                    - The 1Kart Team
                </p>
            </div>
        </div>
        </LoggedIn>
    );
}