import styles from './Navbar.module.scss';
import Image from 'next/Image';
import Link from 'next/Link';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Grid from '@mui/material/Grid';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {
    // const [width, setWidth] = useState(null);
    //     const updateWidthAndHeight = () => {
    //     setWidth(window.innerWidth);
    // };
    // useEffect(() => {
    //     window.addEventListener("resize", updateWidthAndHeight);
    //     return () => window.removeEventListener("resize", updateWidthAndHeight);
    // });

    return (
        <div container className={styles.nav}>
            <Link href="/"><Image src="/../public/1kartCircle.jpg" width="70px" height="70px" alt="logo" className={styles.image}/></Link>
            <ul className={styles.nav_links} sx={{ overflow: 'auto' }}>
                <li className={styles.li}><a className={styles.a} href='/Kart'>Kart</a></li>
                <li className={styles.li}><a className={styles.a} href='/SubKarts'>SubKarts</a></li>
                <li className={styles.li}><a className={styles.a} href="#">Wishlist</a></li>
                <li className={styles.li}><a className={styles.a} href="#">My Brands</a></li>
                <li className={styles.li}><a className={styles.a} href="#">Shipping</a></li>
                <li className={styles.li}><a className={styles.a} href="#">History</a></li>
                <li className={styles.li}><a className={styles.a} href="#">Wishlist</a></li>
            </ul>
            <ul>
                <Link href='/Account'><button className={styles.button}><AccountBoxIcon /></button></Link>
                <Link href='/Account'><button className={styles.button}><LogoutIcon /></button></Link>
            </ul>
        </div>
    );
}