import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  top: {
    display: "flex",
    alignItems: "flex-start",
    width: "98%",
    marginBottom: "10px",
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
  postImg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#FFB2A6",
    fontWeight: "bold",
    marginRight: "20px",
  },
  input: {
    color: "black",
    borderRadius: 20,
    "&$focused $notchedOutline": {
      borderColor: "#FFB2A6",
    },
  },
  focused: {},
  notchedOutline: {},
  pad: {
    padding: "15px",
  },
  uploadimagebutton: {
    marginLeft: "50px",
    color: "#C4C4C4",
  },
  uploadvideobutton: {
    marginLeft: "10px",
    color: "#C4C4C4",
  },
}));
export default useStyles;
