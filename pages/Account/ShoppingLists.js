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
            <h2 className={styles.header}>Restyled Shopping List</h2>
            <h3 className={styles.subheader}>Items of Interest</h3>
            <h4 className={styles.button}>Currently, we are working hard to improve the layout of our website. Our team will have the final product very shortly. Thank you for your consideration. Go 1Kart.</h4>
            <Stack>
                <IconButton size="large" color="secondary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon fontSize="large"/>
                </IconButton>
             </Stack>
        </div>
    );
}

