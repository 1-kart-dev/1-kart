// import React from 'react' 
import styles from './NewAccount.module.scss';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ShoppningLists() 
{
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Restyled Shopping List</h1>
            <h2 className={styles.subheader}>Items of Interest</h2>
            <h3 className={styles.button}>Currently, we are working hard to improve the layout of our website. Our team will have the final product very shortly. Thank you for your consideration. Go 1Kart.</h3>
            <h4 className={styles.subheader}>Here at 1Kart, we are a team of</h4>
            <ul>
            <li className={styles.list}>technologists</li>
            <li className={styles.list}>thinkers</li>
            <li className={styles.list}>builders</li>
            </ul>
            <Stack>
                <IconButton href="http://localhost:3000/NewItem" color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon fontSize="large"/>
                </IconButton>
             </Stack>
             <a href="http://localhost:3000/Account" className={styles.header}>main</a>
        </div>
    );
}

