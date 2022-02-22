import styles from './Kart.module.scss';
import KartItem from '../components/KartItem';
import ReactNavbar from '../components/ReactNavbar';
import Stack from '@mui/material/stack';

export default function Account() {
    return (
        <Stack container>
            <Stack item>
                <KartItem />
            </Stack>
            <Stack item>
                <KartItem />
            </Stack>
            <Stack item>
                <KartItem />
            </Stack>
        </Stack>
    );
}