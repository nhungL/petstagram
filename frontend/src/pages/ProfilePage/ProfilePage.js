import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import useStyles from "./Style";
import { Grid, Typography } from "@mui/material";
import Chat from "../../components/Chat/Chat";
import Post from "../../components/Post/Post";
import Feed from "../../components/Feed/Feed";

export default function ProfilePage() {
    const classes = useStyles();
    return (
        <div className={classes.pad}>
            <Container
                className={classes.background}>

                <Grid container spacing={0} justifyContent="center">
                    <Avatar src="/static/images/avatar/2.jpg" className={classes.avatar}>NL</Avatar>
                </Grid>
                <h3>Nhung Luong</h3>
                <h5># of friends here</h5>

                <Grid container direction="row" spacing={2}>
                    <Grid item sm={12} md={3} className={classes.item}>
                        <div>
                            <Typography variant="h6" align="left" className={classes.title}>
                                Introduction
                            </Typography>
                            <Typography className={classes.subtitle} align="left">
                                Tell others more about you. (nickname, hobbies, age, location, ...)
                            </Typography>
                            <Typography className={classes.subtitle} align="left">
                                Join since ...
                            </Typography>
                            


                        </div>
                    </Grid>

                    <Grid container direction="column" sm={12} md={6} >
                        <Grid item xs className={classes.item}>
                            <div ><Typography variant="h6" align="left" className={classes.title}>
                                Post
                            </Typography>
                                <Post />
                            </div>
                        </Grid>
                        <Grid item xs className={classes.item}>
                            <div >
                                <Typography variant="h6" align="left" className={classes.title}>
                                    My Feeds
                                </Typography>
                                <Feed />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item sm={12} md={3} className={classes.item}>
                        <Typography variant="h6" align="left" className={classes.title}>
                            Messages
                        </Typography>
                        <Chat />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}