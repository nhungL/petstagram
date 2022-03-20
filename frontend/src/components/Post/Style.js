import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginTop: "20px",
    marginLeft: "20px",
  },
  inputBox: {
    width: "450px",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
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
    padding: "0",
  },
}));
export default useStyles;