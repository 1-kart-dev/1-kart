import React from 'react'
import styles from '../styles/Home.module.scss'
import ReactNavbar from '../components/ReactNavbar'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import SearchSks from './SearchSKs'

export default function SubKarts() {
    return(
        <div>
            <ReactNavbar />
            <div className = {styles.container2}>
                <h2 className={styles.skH2}>You can create SubKarts to store different options for a particular item</h2>
                <h3 className={styles.skH3}>Click the Button below to get started</h3>
                <Button 
                variant="contained" 
                className={styles.createSK}
                startIcon={<AddIcon />}>
                    Create SubKart
                </Button>
            </div>
        </div>
    );
}