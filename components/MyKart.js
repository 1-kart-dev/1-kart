import styles from './Kart.module.scss';
import KartItem from './KartItem';
import Jordans from './Jordans';
import Beats from './Beats';
import Fleece from './Fleece';
import ReactNavbar from './ReactNavbar';
import Stack from '@mui/material/stack';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/auth'

export default function MyKart() {
    const [uid, setUid] = useState('');
    const [kartItems, setKartItems] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUid(user.uid);
            } else {
              // User is signed out
              // ..
            }
        });
    }, []);
    
    // useEffect(() => {
    //     if(uid != '') {
    //         axios.get(`/api/users/getMainKart/${uid}`).then((res) => {
    //             axios.get(`/api/karts/getKartItems/${res.data.kart_id}`).then((res) => {
    //                 setKartItems(res.data);
    //             })
    //          })
    //     }
    // }, [uid]);
    return (
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
        </div>
    );
}