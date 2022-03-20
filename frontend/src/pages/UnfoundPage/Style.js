import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    minHeight: "90vh",
  },
  notFoundImage: {
    width: "500px",
    height: "100%",
    marginTop: "50px",
  },
  pageTitle: {
    color: "#FFB2A6",
  },
}));
export default useStyles;
