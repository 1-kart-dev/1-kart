import styles from '../styles/Account.module.scss';
import { Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';

export default function Account() {
    return (
        <>
        <div className={styles.banner}>
            <h1>Account</h1>
        </div>
        <div className={styles.background}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Avatar alt="Profile Picture" img="/../public/pfp.jpg" sx={{ width: '10vh', height: '10vh' }}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                       <Card className={styles.basicOptions} height="50v">
                            <CardContent>
                                <Typography variant="h5">
                                    Personal Information
                                </Typography>
                                <Typography variant="h8">
                                    info here
                                </Typography>
                            </CardContent>
                        </Card>
                   </Grid>
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={styles.basicOptions}>
                            <CardContent>
                                <Typography variant="h5">
                                    Payment
                                </Typography>
                                <Typography variant="h8">
                                    info here
                                </Typography>
                            </CardContent>
                        </Card>
                   </Grid>
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={styles.basicOptions}>
                            <CardContent>
                                <Typography variant="h5">
                                    Shipping Address
                                </Typography>
                                <Typography variant="h8">
                                    info here
                                </Typography>
                            </CardContent>
                        </Card>
                   </Grid>
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={styles.basicOptions}>
                            <CardContent>
                                <Typography variant="h5">
                                    Merchant Accounts
                                </Typography>
                                <Typography variant="h8">
                                    info here
                                </Typography>
                            </CardContent>
                        </Card>
                   </Grid>
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={styles.basicOptions}>
                            <CardContent>
                                <Typography variant="h5">
                                    Advanced Kart Settings
                                </Typography>
                                <Typography variant="h8">
                                    info here
                                </Typography>
                            </CardContent>
                        </Card>
                   </Grid>
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={styles.basicOptions}>
                            <CardContent>
                                <Typography variant="h5">
                                    Login and Security
                                </Typography>
                                <Typography variant="h8">
                                    info here
                                </Typography>
                            </CardContent>
                        </Card>
                   </Grid>
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={styles.basicOptions}>
                            <CardContent>
                                <Typography variant="h5">
                                    Privacy and Support
                                </Typography>
                                <Typography variant="h8">
                                    info here
                                </Typography>
                            </CardContent>
                        </Card>
                   </Grid>
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={styles.basicOptions}>
                            <CardContent>
                                <Typography variant="h5">
                                    Deleted Items
                                </Typography>
                                <Typography variant="h8">
                                    info here
                                </Typography>
                            </CardContent>
                        </Card>
                   </Grid>
                </Grid>
            </Container>
        </div>
        </>
    );
}