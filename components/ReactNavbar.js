import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function ReactNavbar() {
  const [width, setWidth] = useState(null);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  /**if (width < 1150) {
    return (
      <MobileNav
        width={width}
        logoUrl={logoUrl}
        background={background}
        navLinks={navLinks}
        socialIcon={socialIcon}
        sticky={sticky}
      />
    );
  }**/

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
            <li className={styles.li}><a className={styles.a} href="#">Subcarts</a></li>
            <li className={styles.li}><a className={styles.a} href="#">My Brands</a></li>
            <li className={styles.li}><a className={styles.a} href="#">Shipping</a></li>
            <li className={styles.li}><a className={styles.a} href="#">History</a></li>
            <li className={styles.li}><a className={styles.a} href="#">Wishlist</a></li>

          </ul>
        </nav>
        <a className="cta" href="#"><button className={styles.button}>Profile</button></a>
      </header>
    </div>
  );
};