import styles from './Kart.module.scss';
import KartItem from './KartItem';
import Jordans from './Jordans';
import Beats from './Beats';
import Fleece from './Fleece';
import ReactNavbar from './ReactNavbar';
import Stack from '@mui/material/stack';

export default function MyKart() {
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