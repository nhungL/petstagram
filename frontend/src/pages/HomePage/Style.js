import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#F0F0F0",
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    marginTop: "20px",
    width: 100,
    height: 100,
  },
  title: {
    display: "flex",
    fontWeight: "bold",
    marginTop: "20px",
    marginLeft: "20px",
    marginBottom: "10px",
  },
  titleWrapper: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  subtitle: {
    color: "#C4C4C4",
    marginLeft: "20px",
    marginBottom: "40px",
    fontSize: 12,
  },
  container: {
    width: "100%",
    height: "100%",
  },
  chat: {
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    minWidth: "250px",
    margin: "15px",
  },
  chatWrapper: {
    padding: "20px",
  },
  chatTitle: {
    fontWeight: "bold",
  },
  friendList: {
    padding: "0",
    margin: "0",
    listStyle: "none",
  },
  friend: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  friendImg: {
    width: "32px",
    height: "32px",
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
  chatContainer: {
    width: "300px",
    height: "350px",
    position: "sticky",
    marginLeft: "70%",
    bottom: 0,
  },
  paper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  messagesBody: {
    margin: 10,
    overflowY: "scroll",
    minHeight: "240px",
  },
  chatUsername: {
    fontSize: "15px",
    fontWeight: "500",
    marginTop: "10px",
    marginLeft: "10px",
  },
  closeButton: {
    color: "#FFB2A6",
  },
  sendButton: {
    backgroundColor: "#FFB2A6",
    fontWeight: "bold",
    marginLeft: "20px",
    marginRight: "10px",
    marginBottom: "10px",
  },
  input: {
    color: "black",
    borderRadius: 20,
    "&$focused $notchedOutline": {
      borderColor: "#FFB2A6",
    },
    marginLeft: "10px",
    marginBottom: "10px",
  },
  focused: {},
  notchedOutline: {},
}));
export default useStyles;
