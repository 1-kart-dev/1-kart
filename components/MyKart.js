import styles from './MyKart.module.scss';
import KartItem from './KartItem';
import Jordans from './Jordans';
import Beats from './Beats';
import Fleece from './Fleece';
import ReactNavbar from './ReactNavbar';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import { StylesProvider } from '@material-ui/core/styles';

export default function MyKart() {
    return (
        <StylesProvider injectFirst>
            <div className={styles.KartWrapper}>
                <Stack container>
                    <Stack item>
                        <Jordans />
                    </Stack>
                    <Stack item>
                        <Beats />
                    </Stack>
                    <Stack item>
                        <Fleece />
                    </Stack>
                </Stack>
                <Grid container className={styles.footer}>
                    <Grid item xs={1} sm={2} md={3} lg={4} />
                    <Grid item xs={5} sm={4} md={3} lg={2}>
                        <button className={styles.button}><Link href='/NewItem'>Add to Kart</Link></button>
                    </Grid>
                    <Grid item xs={5} sm={4} md={3} lg={2}>
                        <button className={styles.button}><Link href='.'>Checkout</Link></button>
                    </Grid>
                    <Grid item xs={1} sm={2} md={3} lg={4} />
                </Grid>
            </div>
        </StylesProvider>
    );
}