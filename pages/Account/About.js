import React from 'react'
import styles from '../../styles/Home.module.scss'
import ActMenu from './ActMenu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@mui/material';
import LoggedIn from '../LoggedIn';

export default function ActAbout() {
    return(
        <LoggedIn>
        <div className = {styles.container}>
            <ActMenu/>
            <div className = {styles.about}>
                <h2>About Us</h2>
                <img className={styles.kartLogo} src = "../1kart circle.jpg"/>
                <p>
                    The Development Team at 1Kart is working hard to provide the best for our
                    customers by bringing you new features and updating our current ones.
                    If you have questions regarding Privacy, Security, or any of our features
                    you can find the contact information for the members of our team. At the moment
                    we are a very small team, but we take your questions and concerns very seriously
                    and if you contact us we will do our best to fully answer your question within two
                    business days. 
                </p>
                <div className={styles.infoCards}>
                    <Card variant = "outlined" className={styles.card1}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Ushno Chakraborty
                                </Typography>
                                <Typography color="textSecondary">
                                    Head of Technology
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Email: ushno@1-kart.com
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card variant = "outlined" className={styles.card2}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Will Swinyer
                                </Typography>
                                <Typography color="textSecondary">
                                    Head of Development
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Email: will@1-kart.com
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card variant = "outlined" className={styles.card3}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Sam Lempp
                                </Typography>
                                <Typography color="textSecondary">
                                    Lead Developer
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Email: sam@1-kart.com
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card variant = "outlined" className={styles.card4}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Andrew Mahn
                                </Typography>
                                <Typography color="textSecondary">
                                    Front-End Developer
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Email: andrew@1-kart.com
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
        </LoggedIn>
    );
}