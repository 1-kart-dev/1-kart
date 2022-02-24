import React from 'react'
import styles from '../styles/Home.module.scss'
import Button from '@mui/material/Button';
import Router from 'next/router'

export default function ActMenu() {
    function routeProfile() {
        Router.push('/Account');
    }

    function routeHistory() {
        Router.push('/ActHist');
    }

    function routePrivacy() {
        Router.push('/ActPriv');
    }

    function routeSecurity() {
        Router.push('/ActSecurity');
    }

    function routeAbout() {
        Router.push('/ActAbout');
    }

    return(
        <div className={styles.container}>
            <div className = {styles.menu1}>
                <div className = {styles.tabs}>
                    <Button className={styles.menuBtn} onClick={routeProfile} color = "primary">Profile</Button>
                </div>
                <div className = {styles.tabs}>
                    <Button className={styles.menuBtn} onClick={routeHistory} color = "primary">History</Button>
                </div>
                <div className = {styles.tabs}>
                    <Button className={styles.menuBtn} onClick={routePrivacy} color = "primary">Privacy</Button>
                </div>
                <div className = {styles.tabs}>
                    <Button className={styles.menuBtn} onClick={routeSecurity} color = "primary">Security</Button>
                </div>
                <div className = {styles.tabs}>
                    <Button className={styles.menuBtn} onClick={routeAbout} color = "primary">About</Button>
                </div>
            </div>
        </div>
    );
}