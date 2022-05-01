import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    margin: "50px",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "25px",
  },
  listLayout: {
    display: "grid",
    gridTemplateRows: "repeat(5, min-content)",
    gridAutoFlow: "column",
    height: "100",
    overflow: "auto",
  },
}));
export default useStyles;
