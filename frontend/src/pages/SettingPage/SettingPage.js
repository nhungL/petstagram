import { React, useState } from "react";
import useStyles from "./Style";
import { Container, Divider, Grid, Typography, Button } from "@mui/material";
import AccountPage from "../AccountPage/AccountPage";
import FriendSetting from "../../components/FriendSetting/FriendSetting";
import DisplayMode from "../../components/DisplayMode/DisplayMode";
import Help from "../../components/Help/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import PeopleIcon from "@mui/icons-material/People";
import HelpIcon from "@mui/icons-material/Help";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";
import { HowToReg } from "@mui/icons-material";

const SettingPage = () => {
  const classes = useStyles();
  const [account, setShowAccount] = useState(false);
  const [following, setShowFollowing] = useState(false);
  const [followers, setShowFollowers] = useState(false);
  const [display, setShowDisplay] = useState(false);
  const [help, setShowHelp] = useState(false);

  return (
    <div className={classes.background}>
      <AppBarContent />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container>
          <Grid item>
            <Typography align="left" className={classes.alignItem}>
              {/* <SettingsIcon className={classes.icon}/> */}
              <span className={classes.title}> Settings </span>
            </Typography>
          </Grid>

          <Grid
            container
            direction="column"
            sm={8}
            alignContent="center"
            style={{ maxWidth: "None" }}
          >
            <Grid item className={classes.item}>
              <Typography>
                <HelpIcon className={classes.iconSetting} />
                <Divider />
                <Button
                  className={classes.button}
                  onClick={() => setShowHelp((prev) => !prev)}
                >
                  Help
                </Button>
                <Help />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default SettingPage;
