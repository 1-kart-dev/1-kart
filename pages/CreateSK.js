import React from 'react'
import styles from '../styles/Home.module.scss'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import EditIcon from '@mui/icons-material/Edit'
import Button from '@mui/material/Button'

export default function createSK() {
    return (
        <div className={styles.container}>
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
            </div>
        </div>
    );
}