import React from 'react'
import styles from './NewAccount.module.scss';
import Navbar from '../../components/Navbar'
import LoggedIn from '../LoggedIn';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LandingFooter from '../../components/LandingFooter'
import Router from 'next/router'


export default function ActOverview() {

    function routeProfile() {
        Router.push('/Account/Profile');
    }

    function routeSupport() {
        Router.push('/Account/Support');
    }

    function routeOrderHistory() {
        Router.push('/Account/OrderHistory');
    }

    return(
        <LoggedIn>
            <div className={styles.container}>
                <Navbar />
                <h2>Your Profile</h2>
                <div className={styles.page}>
                    <div className={styles.btnGrid1}>
                        <button className={styles.infoBtn} onClick={routeProfile}>
                            <AccessibilityIcon style={{ fontSize: 30 }} /> Account Information
                        </button>
                    </div>
                    <div className={styles.btnGrid2}>
                        <button className={styles.orderBtn} onClick={routeOrderHistory}>
                            <TimelineOutlinedIcon style={{ fontSize: 30 }} /> Order History
                        </button>
                    </div>
                    <div className={styles.btnGrid3}>
                        <button className={styles.listsBtn}>
                            <AssignmentOutlinedIcon style={{ fontSize: 30 }} /> Shopping Lists
                        </button>
                    </div>
                    <div className={styles.btnGrid4}>
                        <button className={styles.warrantyBtn}>
                            <VerifiedUserOutlinedIcon style={{ fontSize: 30 }} /> Warranties
                        </button>
                    </div>
                    <div className={styles.btnGrid5}>
                        <button className={styles.addressBtn}>
                            <LocationOnOutlinedIcon style={{ fontSize: 30 }} />
                            Addresses & Payments
                        </button>
                    </div>
                    <div className={styles.btnGrid6} onClick={routeSupport}>
                        <button className={styles.supportBtn}>
                        <AddToQueueIcon style={{ fontSize: 30 }} />  Support
                        </button>
                    </div>
                </div>
                <LandingFooter />
            </div>
        </LoggedIn>
    );
}