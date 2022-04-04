// import React from 'react' 
import styles from './NewAccount.module.scss';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Image from 'next/Image'

export default function ShoppningLists() 
{
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Your Lists</h1>
            <h3 className={styles.subheader2}>Want to add something to your cart? Try our add to shopping cart feature!</h3>
            <Stack>
                <IconButton href="http://localhost:3000/NewItem" color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon fontSize="large"/>
                </IconButton>
             </Stack>
            <h3 className={styles.subheader2}>Otherwise, feel free to navigate back to the <a href="http://localhost:3000/Account">main</a> page </h3>
            <center>
                <Image 
                    src="/pfp.jpg"
                    alt="Ush"
                    width={100}
                    height={100}
                />
            </center> */
            <div className={styles.content}>
                <div className={styles.shoppingLists}>
                    <h2 className={styles.shoppingLists}>Shopping Lists</h2>
                </div>
                <div className={styles.wishLists}>
                    <h2 className={styles.wishLists}>Wish Lists</h2>
                </div>
            </div>
        </div>     
    );
}

