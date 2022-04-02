import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import useStyles from "./Style";

export default function InputForm() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Typography variant="h6" align="left" className={classes.title}>
                Email Us
            </Typography>
            
            <Grid container direction="column">
                <Grid container direction="row">
                    <Typography className={classes.inputText}>
                        First Name
                    </Typography>
                    <div className={classes.inputBox}>
                        <TextField
                            variant="outlined"
                            size="small"
                            multiline
                            className={classes.inputBox}
                            InputProps={{
                                classes: {
                                    root: classes.input,
                                    focused: classes.focused,
                                    notchedOutline: classes.notchedOutline,
                                },
                            }}
                        />
                    </div>
                </Grid>
                <Grid container direction="row">
                    <Typography className={classes.inputText}>
                        Last Name
                    </Typography>
                    <div className={classes.inputBox}>
                        <TextField
                            variant="outlined"
                            size="small"
                            multiline
                            className={classes.inputBox}
                            InputProps={{
                                classes: {
                                    root: classes.input,
                                    focused: classes.focused,
                                    notchedOutline: classes.notchedOutline,
                                },
                            }}
                        />
                    </div>
                </Grid>
                <Grid container direction="row">
                    <Typography className={classes.inputText}>
                        Email
                    </Typography>
                    <div className={classes.inputBox}>
                        <TextField
                            variant="outlined"
                            size="small"
                            multiline
                            className={classes.inputBox}
                            InputProps={{
                                classes: {
                                    root: classes.input,
                                    focused: classes.focused,
                                    notchedOutline: classes.notchedOutline,
                                },
                            }}
                        />
                    </div>
                </Grid>
                <Grid container direction="row">
                    <Typography className={classes.inputText}>
                        Message
                    </Typography>
                    <div className={classes.inputBox}>
                        <TextField
                            placeholder="How can we help you?"
                            variant="outlined"
                            size="small"
                            multiline
                            className={classes.inputBox}
                            InputProps={{
                                classes: {
                                    root: classes.input,
                                    focused: classes.focused,
                                    notchedOutline: classes.notchedOutline,
                                },
                            }}
                        />
                    </div>
                </Grid>
            </Grid>
            <Grid align="center">
                <Button variant="contained" size="small" className={classes.button}>
                    SEND
                </Button>
            </Grid>
        </div>
    );
}
