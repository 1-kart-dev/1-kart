import React from 'react' 
import styles from './NewAccount.module.scss';

export default function ShoppningLists() {
    return(
        <div className={styles.container}>
            <h2 className={styles.header}>Restyled Shopping List</h2>
            <h3 className={styles.subheader}>Items of Interest</h3>
            <h4 className={styles.button}>Order Inventory</h4>
        </div>
    );
}