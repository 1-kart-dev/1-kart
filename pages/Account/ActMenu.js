import React from 'react'
import styles from '../../styles/Home.module.scss'
import Button from '@mui/material/Button';
import Router from 'next/router'
import LoggedIn from '../LoggedIn';

export default function ActMenu() {
    function routeProfile() {
        Router.push('/Account');
    }

    function routeHistory() {
        Router.push('/Account/History');
    }

    function routePrivacy() {
        Router.push('/Account/Privacy');
    }

    function routeSecurity() {
        Router.push('/Account/Security');
    }

    function routeAbout() {
        Router.push('/Account/About');
    }

    function routeKart() {
        Router.push('/Kart');
    }

    return(
        <LoggedIn>
        <div className={styles.no_padding_container}>
            <div className = {styles.menu1}>
                <div className = {styles.tabs}>
                    <Button className={styles.menuBtn} onClick={routeKart}>Return to Dashboard</Button>
                </div>
                <div className = {styles.tabs}>
                    <Button className={styles.menuBtn} onClick={routeProfile}>Profile</Button>
                </div>
                <div className = {styles.tabs}>
                    <Button className={styles.menuBtn} onClick={routeHistory}>History</Button>
                </div>
                <div className = {styles.tabs}>
                    <Button className={styles.menuBtn} onClick={routePrivacy}>Privacy</Button>
                </div>
                <div className = {styles.tabs}>
                    <Button className={styles.menuBtn} onClick={routeSecurity}>Security</Button>
                </div>
                <div className = {styles.tabs}>
                    <Button className={styles.menuBtn} onClick={routeAbout}>About</Button>
                </div>
            </div>
        </div>
        </LoggedIn>
    );
}