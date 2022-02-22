import React from 'react'
import styles from '../styles/Kart.module.scss'
import ReactNavbar from '../components/ReactNavbar'
import MyKart from '../components/MyKart'
import { useTable } from 'react-table'

export default function Kart() {
    return(
        <div>
            <ReactNavbar />
            <MyKart />
            {/* <div className = {styles.container}>
                <div className = {styles.tableContainer}>
                    <h2>Your Active Kart</h2>
                    <div className = {styles.itemContainer}>
                        <div className = {styles.logoContainer}>
                            <img src="../nikelogo.png" />
                        </div>
                        <div className = {styles.imgContainer}>
                            <img src="../retro13.jpg" />
                        </div>
                        <div className = {styles.itemDescr}>
                            <h2>Air Jordan Retro 13</h2>
                            <p>Mens/Shoes</p>
                            <p>Black/White/Court Purple</p>
                            <p>Size: 12</p>
                            <p>QTY: 1</p>
                        </div>
                        <div className = {styles.itemMisc}>
                            <h3>Price: $190</h3>
                            <h3>
                                Shipping Information:
                                N/A
                            </h3>
                            <button className = {styles.delete}>Delete</button>
                            <div className = {styles.divider} />
                            <button className = {styles.moveTo}>Move to SubKart</button>
                        </div>
                    </div>
                    <div className = {styles.itemContainer}>
                        <div className = {styles.logoContainer}>
                            <img src="../beatslogo.png" />
                        </div>
                        <div className = {styles.imgContainer}>
                            <img src="../beats-studio3.jpg" />
                        </div>
                        <div className = {styles.itemDescr}>
                            <h2>Beats Studio 3</h2>
                            <p>Electronics/Headphones</p>
                            <p>Midnight Black/Orange</p>
                            <p>QTY: 1</p>
                        </div>
                        <div className = {styles.itemMisc}>
                            <h3>Price: $349.95</h3>
                            <h3>
                                Shipping Information:
                                N/A
                            </h3>
                            <button className = {styles.delete}>Delete</button>
                            <div className = {styles.divider} />
                            <button className = {styles.moveTo}>Move to SubKart</button>
                        </div>
                    </div>
                    <div className = {styles.itemContainer}>
                        <div className = {styles.logoContainer}>
                            <img src="../nikelogo.png" />
                        </div>
                        <div className = {styles.imgContainer}>
                            <img src="../nike-techfleece.jpg" />
                        </div>
                        <div className = {styles.itemDescr}>
                            <h2>Sportswear Tech Fleece</h2>
                            <p>Mens/Hoodies</p>
                            <p>Brown Basalt/Black</p>
                            <p>Size: L</p>
                            <p>QTY: 1</p>
                        </div>
                        <div className = {styles.itemMisc}>
                            <h3>Price: $110</h3>
                            <h3>
                                Shipping Information:
                                N/A
                            </h3>
                            <button className = {styles.delete}>Delete</button>
                            <div className = {styles.divider} />
                            <button className = {styles.moveTo}>Move to SubKart</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}