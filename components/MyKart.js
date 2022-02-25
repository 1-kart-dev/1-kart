import styles from './MyKart.module.scss';
import KartItem from './KartItem';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import { StylesProvider } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import Router from 'next/router'
import { CircularProgress } from '@mui/material';


export default function MyKart(props) {
    const [loading, setLoading] = useState(false);
    function routeChange() {
        Router.push('../Checkout');
    }

    function onClick() {
        routeChange();
    }

    useEffect(() => {
        if(!props.items) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [props.items])

    return (
        <StylesProvider injectFirst>
            <div className={styles.KartWrapper}>
                {loading ? <></> : props.items.map(item => {
                    return (<Stack item key={item.item_id}>
                        <KartItem item={item} kart_id={props.kart_id} handleRemove={props.handleRemove}/>
                    </Stack>)
                })}
                <Grid container>
                    <Grid item align="left" p={1}>
                        <Button variant="contained" className={styles.checkoutBtn} onClick={() => Router.push("/NewItem")}>Add Item to Kart</Button>
                    </Grid>
                    <Grid item align="right" p={1}>
                        <Button variant="contained" className={styles.checkoutBtn} onClick={onClick}>Checkout</Button>
                    </Grid>
                </Grid>
            </div>
        </StylesProvider>
    );
}