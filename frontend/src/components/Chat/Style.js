import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  chat: {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    minWidth: "250px",
  },
  chatWrapper: {
    padding: "20px",
  },
  title: {
    fontWeight: "bold",
  },
  friendList: {
    padding: "0",
    margin: "0",
    listStyle: "none",
  },
}));
export default useStyles;
