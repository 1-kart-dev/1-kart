import styles from './KartItem.module.scss';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
                        <Typography variant="subtitle1">2/22/22</Typography>
                    </Grid>
                    <Grid item xs={12} className={styles.images}>
                        {/* PRODUCT IMAGE */}
                        <Image src="/../public/retro13.jpg" alt="Nike TechFleece" width="100vw" height="100vh" layout="intrinsic"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={9} sm={10}>
                <Grid container={'true'}>
                    {/* ITEM NAME, PRICE / RATING, DESCRIPTION, QUANTITY / WISHLIST / SUBKART / REMOVE */}
                    <Grid item xs={12} className={styles.itemName}>
                        <Typography variant="h6" classes={styles.itemName}><b>Jordan Retro 13</b></Typography>
                    </Grid>
                    <Grid item xs={12} className={styles.itemPrice}>
                        <Typography variant="subtitle1"><b>$190</b></Typography>
                        {/* INSERT RATING HERE */}
                    </Grid>
                    <Grid item xs={12} className={styles.itemDesc}>
                        <Typography><b>Mens / Shoes</b></Typography>
                        <Typography><b>Color:</b> black/white/court purple</Typography>
                        <Typography><b>Size:</b> 12</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={4}>
                                {/* ITEM QUANTITY */}
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Button><RemoveCircleIcon /></Button>
                                    <Typography>1</Typography>
                                    <Button><AddCircleIcon /></Button>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sm={5}>
                                {/* EMPTY SPACE */}
                            </Grid>
                            <Grid item xs={2} sm={1}>
                                {/* ADD TO WISHLIST BUTTON */}
                                <Button><FavoriteBorderIcon /></Button>
                            </Grid>
                            <Grid item xs={2} sm={1}>
                                {/* ADD TO SUBKART BUTTON */}
                                <Button><AddShoppingCartIcon /></Button>
                            </Grid>
                            <Grid item xs={2} sm={1}>
                                {/* REMOVE FROM KART BUTTON */}
                                <Button><DeleteOutlineIcon /></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}