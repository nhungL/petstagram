import React from "react";
import useStyles from "./Style";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { Switch } from "@mui/material";
import App from "../../App";

export default function DisplayMode() {
    const [toggleDark, settoggleDark] = useState(false);

    const myTheme = createTheme({
        palette: {
            mode: toggleDark ? "dark" : "light",
        }
    });

    return (
        <ThemeProvider theme={myTheme}>
            <CssBaseline />
            <Switch checked={toggleDark} onChange={() => settoggleDark(!toggleDark)} />
        </ThemeProvider>
    );
}