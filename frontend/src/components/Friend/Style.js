import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
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
  }
}));
export default useStyles;
