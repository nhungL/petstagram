import { createTheme } from "@material-ui/core/styles";
const myTheme = createTheme({
  root: {
    display: "flex",
  },
  palette: {
    primary: {
      main: "#1987c9",
    },
  },
  typography: {
    fontFamily: "Playfair Display",
    fontSize: 12,
    h1: {
      fontSize: 30,
      fontWeight: 700,
    },
    h2: {
      fontSize: 20,
      fontWeight: 700,
      paddingBottom: 20,
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#662E9B",
      },
    },
  },
});
export default createTheme(myTheme);
