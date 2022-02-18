import React from 'react'
import styles from '../styles/Home.module.scss'

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