import styles from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Grid from '@mui/material/Grid';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../public/1kartCircle.jpg';

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
        <Grid container className={styles.nav}>
            <Grid item xs={1} align="center">
                <Link href="/"><Image src={logo} width="70px" height="70px" alt="logo" className={styles.image}/></Link>
            </Grid>
            <Grid item xs={7} sm={8} md={9}>
                <ul className={styles.nav_links} sx={{ overflow: 'auto' }}>
                    <li className={styles.li}><a className={styles.a} href='/Kart'>Kart</a></li>
                    <li className={styles.li}><a className={styles.a} href='/SubKarts'>SubKarts</a></li>
                    <li className={styles.li}><a className={styles.a} href="#">Wishlist</a></li>
                    <li className={styles.li}><a className={styles.a} href="#">My Brands</a></li>
                    <li className={styles.li}><a className={styles.a} href="#">Shipping</a></li>
                    <li className={styles.li}><a className={styles.a} href="#">History</a></li>
                    <li className={styles.li}><a className={styles.a} href="#">Wishlist</a></li>
                </ul>
            </Grid>
            <Grid item xs={4} sm={3} md={2} align="right">
                <ul>
                    <Link href='/Account'><button className={styles.button}><AccountBoxIcon /></button></Link>
                    <Link href='/Account'><button className={styles.button}><LogoutIcon /></button></Link>
                </ul>
            </Grid>   
        </Grid>
    );
}