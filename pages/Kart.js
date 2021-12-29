import React from 'react'
import styles from '../styles/Home.module.css'
import ReactNavbar from '../components/ReactNavbar'

export default function Kart() {
    return(
        <div>
            <ReactNavbar />
            <div className='container'>
                <h1>Lorenzo's Kart</h1>
            </div>
        </div>
    );
}