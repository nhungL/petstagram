import React, { Component } from "react";
import { Typography } from "@mui/material";
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import Item from '@mui/material/MenuItem';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { Theme, createTheme } from '@mui/system';
import { withStyles } from "@mui/styles";
import styles from './styles';
import { ClassNames } from "@emotion/react";
import clsx from "clsx";
import { createStyles } from '@mui/styles';

// const useStyles = makeStyles({
//     root: {
//         bgcolor: '#E0DEDE',
//         color: (props) => props.color,
//     },
// });

function ProfilePage(props) {
    // const classes = useStyles(props);
    return (
        <Box bgcolor='#E0DEDE' >
            <Container
                maxWidth="lg"
                sx={{ mt: '10px', width: '100%', height: '100%', }}
                style={{ backgroundColor: 'pink' }}>

                <Grid container justify="center" alignItems="center">
                    <Avatar src="/static/images/avatar/2.jpg" sx={{ mt: "20px", width: 100, height: 100 }}>NL</Avatar>
                </Grid>
                <h3>Nhung Luong</h3>
                <h5># of friends here</h5>

                <Grid container direction="row" spacing={2}>
                    <Grid item xs={12} md={3} style={{ background: 'white' }} >
                        <div>
                            <h3>Introduction</h3>
                                <p>
                                    Name:
                                    Age:
                                    Location:
                                    Hobbies:
                                </p>

                        </div>
                    </Grid>

                    <Grid item container direction="column" xs={12} md={6}>
                        <Grid item xs style={{ background: 'white'}}>
                            <div >Post</div>
                        </Grid>
                        <Grid item xs style={{ background: 'white'}}>
                            <div >
                                My Feed
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={3} style={{ background: 'white' }}>
                        <div >Chat</div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
export default (ProfilePage);