import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  top: {
    display: "flex",
    alignItems: "center",
  },
  inputBox: {
    marginLeft: "5px",
    width: "100%",
  },
  post: {
    width: "95%",
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    margin: "15px",
  },
  button: {
    backgroundColor: "#FFB2A6",
    fontWeight: "bold",
    marginRight: "20px",
  },
  input: {
    color: "black",
    borderRadius: 20,
    '&$focused $notchedOutline': {
      borderColor: '#FFB2A6',
    }
  },
  focused: {},
  notchedOutline: {},
  pad: {
    padding: "15px",
  },
}));
export default useStyles;