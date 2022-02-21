import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Link from 'next/link'
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default function ReactNavbar() {
  const [width, setWidth] = useState(null);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const Error = () => <h1>Please pass the component in the menu prop</h1>;

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.logo}>1Kart</h1>
        <nav className={styles.nav}>
          <ul className={styles.nav_links}>
            <li className={styles.li}>
              <Link href='/Kart'>Kart</Link>
            </li>
            <li className={styles.li}>
              <Link href='/SubKarts'>SubKarts</Link>
            </li>
            <li className={styles.li}><a className={styles.a} href="#">My Brands</a></li>
            <li className={styles.li}><a className={styles.a} href="#">Shipping</a></li>
            <li className={styles.li}><a className={styles.a} href="#">History</a></li>
            <li className={styles.li}><a className={styles.a} href="#">Wishlist</a></li>
          </ul>
        </nav>
        <Link href='/Account'><button className={styles.button}><AccountBoxIcon /></button></Link>
      </header>
    </div>
  );
};