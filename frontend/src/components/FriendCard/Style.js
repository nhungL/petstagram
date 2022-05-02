import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  name: {
    marginTop: "33px",
    marginLeft: "15px",
  },
  button: {
    backgroundColor: "#FFB2A6",
    marginTop: "30px",
    width: "150px",
    marginLeft: "40px",
    justifyItems: "flex-end",
  },
  card: {
    width: "500px",
    borderColor: "#C4C4C4",
    marginLeft: "55px",
    marginTop: "50px",
  },
  avatar: {
    margin: "20px",
    marginLeft: "40px",
  },
}));
export default useStyles;
