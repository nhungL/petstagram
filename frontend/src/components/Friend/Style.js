import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  friend: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  friendImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "10px",
  },
  chatPreview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  friendUsername: {
    fontSize: "15px",
    fontWeight: "500",
  },
  chatContent: {
    fontSize: "12px",
    margin: "5px 0",
  },

  //for chat
  paper: {
    width: "80vw",
    height: "80vh",
    maxWidth: "500px",
    maxHeight: "700px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  paper2: {
    width: "80vw",
    maxWidth: "500px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  messagesBody: {
    width: "calc( 100% - 20px )",
    margin: 10,
    overflowY: "scroll",
    height: "calc( 100% - 80px )",
  },
}));
export default useStyles;
