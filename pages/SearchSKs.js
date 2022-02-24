import React from 'react'
import styles from '../styles/Home.module.scss'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import EditIcon from '@mui/icons-material/Edit'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import LoggedIn from './LoggedIn'

export default function SearchSks() {
    return(
        <form className = {styles.form} action="/" method="get">
            <input
                type="text"
                id="header-search"
                placeholder="Search SubKarts"
                name="s" 
            />
            <button type="submit">Search</button>
        </form>
    );
}

function bs() {
    return(
        <LoggedIn>
        <div className = {styles.container2}>
            <h2>You can create SubKarts to store different options for a particular item</h2>
            <h3>Click the Button below to get started</h3>
            <Button 
            variant="contained" 
            startIcon={<AddIcon />}>
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
            </div>
        </div>
        </LoggedIn>
    );
}