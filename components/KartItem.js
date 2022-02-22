import styles from './KartItem.module.scss';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function KartItem() {
    return (
        <Grid container={'true'} className={styles.box} spacing={1}>
            <Grid item xs={3} sm={2}>
                <Grid container={'true'} spacing={1}>
                    <Grid item xs={3} className={styles.images}>
                        {/* BRAND */}
                        <Image src="/../public/nikelogo.png" alt="Nike logo" width="100vw" height="100vh" layout="intrinsic"/>
                    </Grid>
                    <Grid item xs={9} className={styles.text}>
                        <p>2/22/22</p>
                    </Grid>
                    <Grid item xs={12} className={styles.images}>
                        {/* PRODUCT IMAGE */}
                        <Image src="/../public/nike-techfleece.jpg" alt="Nike TechFleece" width="100vw" height="100vh" layout="intrinsic"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={9} sm={10}>
                <Grid container={'true'}>
                    {/* ITEM NAME, PRICE / RATING, DESCRIPTION, QUANTITY / WISHLIST / SUBKART / REMOVE */}
                    <Grid item xs={12} className={styles.itemName}>
                        <p><b>Sportswear Tech Fleece</b></p>
                    </Grid>
                    <Grid item xs={12} className={styles.itemPrice}>
                        <p><b>$110</b></p>
                        {/* INSERT RATING HERE */}
                    </Grid>
                    <Grid item xs={12} className={styles.itemDesc}>
                        <p><b>Color:</b> brown basalt/black</p>
                        <p><b>Size:</b> L</p>
                        <p><b>Qty:</b> 1</p>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={4}>
                                {/* ITEM QUANTITY */}
                            </Grid>
                            <Grid item xs={2}>
                                {/* EMPTY SPACE */}
                            </Grid>
                            <Grid item xs={2}>
                                {/* ADD TO WISHLIST BUTTON */}
                            </Grid>
                            <Grid item xs={2}>
                                {/* ADD TO SUBKART BUTTON */}
                            </Grid>
                            <Grid item xs={2}>
                                {/* REMOVE FROM KART BUTTON */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}