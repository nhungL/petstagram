import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    marginTop: "8vw",
    marginLeft: "10vw",
    width: "500px",
    height: "100vh",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#C4C4C4",
    marginBottom: "40px",
  },
  body: {
    color: "#949090",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  inputBox: {
    width: "410px",
    marginBottom: "20px",
  },
  buttonS: {
    backgroundColor: "#FFB2A6",
    width: "410px",
    marginTop: "30px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
  },
  haveacc: {
    color: "#949090",
    marginLeft: "130px",
  },
  alert: {
    width: "76%",
    marginBottom: "30px",
  },
}));
export default useStyles;
