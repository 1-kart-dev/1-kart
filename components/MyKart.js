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
import Button from '@mui/material/Button';
import Router from 'next/router'

export default function MyKart() {

    function routeChange() {
        Router.push('../Checkout');
    }

    function onClick() {
        routeChange();
    }

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
                <Stack item>
                    <Beats />
                </Stack>
                <Stack item>
                    <Fleece />
                </Stack>
                <Button variant="contained" className={styles.checkoutBtn} onClick={onClick}>Checkout</Button>
            </div>
        </StylesProvider>
    );
}