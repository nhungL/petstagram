import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    marginTop: "10vw",
    marginLeft: "10vw",
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
    width: "380px",
    marginBottom: "20px",
  },
  buttonS: {
    backgroundColor: "#FFB2A6",
    width: "380px",
    marginTop: "30px",
    fontWeight: "bold",
  },
}));
export default useStyles;
