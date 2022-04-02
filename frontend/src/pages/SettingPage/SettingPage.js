import { React, useState} from "react";
import useStyles from "./Style";
import { Container, Divider, Grid, Typography, Button } from "@mui/material";
import AccountPage from "../AccountPage/AccountPage";
import FriendSetting from "../../components/FriendSetting/FriendSetting";
import DisplayMode from "../../components/DisplayMode/DisplayMode";
import Help from "../../components/Help/Help";
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import PeopleIcon from '@mui/icons-material/People';
import HelpIcon from '@mui/icons-material/Help';


const SettingPage = () => {
    const classes = useStyles();
    const [account, setShowAccount] = useState(false);
    const [friends, setShowFriends] = useState(false);
    const [display, setShowDisplay] = useState(false);
    const [help, setShowHelp] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Container >
                <Grid item>
                    <Typography align="left" className={classes.alignItem}>
                        {/* <SettingsIcon className={classes.icon}/> */}
                        <span className={classes.title}> Settings </span>
                    </Typography>
                </Grid>

                <Grid container direction="column" sm={8} alignContent="center" style={{maxWidth:"None"}} >
                    <Grid item style={{ marginTop: "20px" }} className={classes.item}>
                        <Typography>
                            <ManageAccountsIcon className={classes.iconSetting}/>
                            <Divider/>
                            <Button className={classes.button} onClick={() => setShowAccount(prev => !prev)}>Account</Button>
                            {account &&
                                <AccountPage />
                            }
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Typography>
                            <PeopleIcon className={classes.iconSetting}/>
                            <Divider/>
                            <Button className={classes.button} onClick={() => setShowFriends(prev => !prev)}>Friend</Button>
                            {friends &&
                                <FriendSetting />
                            }
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Typography>
                            <Brightness4Icon className={classes.iconSetting}/>
                            <Divider/>
                            <Button className={classes.button} onClick={() => setShowDisplay(prev => !prev)}>Display Mode</Button>
                            {display &&
                                <DisplayMode />
                            }
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Typography>
                            <HelpIcon className={classes.iconSetting}/>
                            <Divider/>
                            <Button className={classes.button} onClick={() => setShowHelp(prev => !prev)}>Help</Button>
                            {help &&
                                <Help />
                            }
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default SettingPage;