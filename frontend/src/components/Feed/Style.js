import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  post: {
    backgroundColor: "#FFFFFF",
    width: "95%",
    borderRadius: "10px",
    boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    margin: "30px 0",
  },

  postWrapper: {
    padding: "15px",
  },

  postTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  postTopLeft: {
    display: "flex",
    alignItems: "center",
  },

  postTopLeftText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  postProfileImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  postUsername: {
    fontSize: "15px",
    fontWeight: "500",
    margin: "0 10px 5px",
  },

  postDate: {
    fontSize: "12px",
    margin: "0 10px",
  },

  postCenter: {
    margin: "20px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  postImg: {
    marginTop: "20px",
    width: "100%",
    maxHeight: "500px",
    objectFit: "contain",
  },

  postBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  postBottomLeft: {
    display: "flex",
    alignItems: "center",
  },

  postLikeCounter: {
    fontSize: "15px",
  },

  postCommentText: {
    cursor: "pointer",
    borderBottom: "1px dashed gray",
    fontSize: "15px",
  },
}));
export default useStyles;
