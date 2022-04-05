// import React from 'react' 
import styles from './NewAccount.module.scss';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RedeemIcon from '@mui/icons-material/Redeem';
import Image from 'next/Image'

export default function ShoppningLists() 
{
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Your Lists</h1>
            <h3 className={styles.subheader2}>Here are your lists! Add items of interest to your shopping cart, or let people know what you want with wishlist.</h3>
            <h3 className={styles.subheader2}>Otherwise, feel free to navigate back to the <a href="http://localhost:3000/Account">main</a> page </h3>
            <center>
                <Image 
                    src="/pfp.jpg"
                    alt="Ush"
                    width={100}
                    height={100}
                />
            </center>
            <div className={styles.content}>
                <div className={styles.shoppingLists}>
                    <h2 className={styles.subheader2}>Shopping Lists</h2>
                    <h2 className={styles.subheader2}>Add items you want to shop for.</h2>
                    <Stack>
                        <IconButton href="http://localhost:3000/NewItem" color="default" aria-label="add to shopping cart">
                            <AddShoppingCartIcon fontSize="large"/>
                        </IconButton>
                    </Stack>
                </div>
                <div className={styles.wishLists}>
                    <h2 className={styles.subheader2}>Wish Lists</h2>
                    <h2 className={styles.subheader2}>Let people know what gifts you'd like.</h2>
                    <Stack>
                        <IconButton href="http://localhost:3000/NewItem" color="default" aria-label="add to wish list">
                            <RedeemIcon fontSize="large"/>
                        </IconButton>
                    </Stack>
                </div>
                <div> 
                    
                </div>
            </div>
        </div>    
    );
}

