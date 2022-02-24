import styles from '../styles/Home.module.scss';
import ReactNavbar from '../components/ReactNavbar';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid3x3 } from '@mui/icons-material';
import Button from '@mui/material/Button';
import LoggedIn from './LoggedIn';

export default function Checkout() {
    return(
        <div className={styles.container}>
            <ReactNavbar />
            <div className={styles.checkoutBox}>
                <h3><ShoppingCartCheckoutIcon fontSize="large" /> Your Order</h3>
                <Grid container className={styles.alignItems}>
                    <Grid item className = {styles.checkItem}>
                        <Typography className={styles.boldTxt}>Qty: 1 Jordan Retro 13</Typography>
                        <Typography className={styles.italicTxt}>Nike Air Jordan</Typography>
                        <Typography className={styles.topRight}>$190</Typography>
                        <Typography className={styles.btmRight}>Estimated Total: $203.3</Typography>
                    </Grid>
                    <Grid item className = {styles.checkItem}>
                        <Typography className={styles.boldTxt}>Qty: 1 Beats Studio 3</Typography>
                        <Typography className={styles.italicTxt}>Beats by Dr. Dre</Typography>
                        <Typography className={styles.topRight}>$349.95</Typography>
                        <Typography className={styles.btmRight}>Estimated Total: $374.44</Typography>
                    </Grid>
                    <Grid item className = {styles.checkItem}>
                        <Typography className={styles.boldTxt}>Qty: 1 Sportswear Tech Fleece</Typography>
                        <Typography className={styles.italicTxt}>Nike</Typography>
                        <Typography className={styles.topRight}>$110</Typography>
                        <Typography className={styles.btmRight}>Estimated Total: $117.7</Typography>
                    </Grid>
                    <Grid item className = {styles.totalItem}>
                        <Typography className = {styles.estimate}>Estimated Total:</Typography>
                        <Typography className = {styles.bldTtl}>$695.44</Typography>
                        <Button variant = "contained" className={styles.payBtn}>Pay Now</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}