import React, { useState } from 'react'
import styles from '../styles/Home.module.scss'
import ReactNavbar from '../components/ReactNavbar'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import SearchSks from './SearchSKs'
import LoggedIn from './LoggedIn'

export default function SubKarts() {
    const [show, setShow] = useState(false);
   
    return(
        <LoggedIn>
        <div>
            <ReactNavbar />
            <div className = {styles.container2}>
                <h2 className={styles.skH2}>You can create SubKarts to store different options for a particular item</h2>
                <h3 className={styles.skH3}>Click the Button below to get started</h3>
                <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                href='./CreateSK'>
                    Create SubKart
                </Button>
                <SearchSks />
                <div className = {styles.kartContainer}>
                    <h2>Shoes</h2>
                    <div className = {styles.itemContainer1}>
                        <h2>Nike</h2>
                        <h3>Air Jordan Retro 13</h3>
                        <p>Price: $190</p>
                        <p>URL: https://www.nike.com/t/air-jordan-13-retro-mens-shoes-Wgz8G4/DJ5982-015</p>
                        <div className = {styles.btnContainer}>
                            <Button variant="outlined" endIcon={<EditIcon />}>Edit</Button>
                            <div className = {styles.divider}></div>
                            <Button variant="outlined" color="error" endIcon={<RemoveCircleOutlineIcon />}>Remove</Button>
                        </div>
                    </div>
                    <div className = {styles.itemContainer1}>
                        <h2>Adidas</h2>
                        <h3>Ultraboost 22</h3>
                        <p>Price: $190</p>
                        <p>URL: https://www.adidas.com/us/ultraboost-22-shoes/GX3060.html</p>
                        <div className = {styles.btnContainer}>
                            <Button variant="outlined" endIcon={<EditIcon />}>Edit</Button>
                            <div className = {styles.divider}></div>
                            <Button variant="outlined" color="error" endIcon={<RemoveCircleOutlineIcon />}>Remove</Button>
                        </div>
                    </div>
                    <div className = {styles.itemContainer1}>
                        <h2>Nike</h2>
                        <h3>Airmax 270</h3>
                        <p>Price: $160</p>
                        <p>URL: https://www.nike.com/t/air-max-270-mens-shoes-KkLcGR/AH8050-100</p>
                        <div className = {styles.btnContainer}>
                            <Button variant="outlined" endIcon={<EditIcon />}>Edit</Button>
                            <div className = {styles.divider}></div>
                            <Button variant="outlined" color="error" endIcon={<RemoveCircleOutlineIcon />}>Remove</Button>
                        </div>
                    </div>
                    <div className={styles.itemContainer1}>
                        <Button variant="contained" color="success" startIcon={<AddIcon />}>Add Item</Button>
                    </div>
                </div>
            </div>
        </div>
        </LoggedIn>
    );
}