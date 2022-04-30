import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  post: {
    backgroundColor: "#FFFFFF",
    width: "95%",
    borderRadius: "20px",
    boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    margin: "15px",
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
    color: "black",
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
    flexBasis: "max-content",
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

  //for Edit and delete post
  menuItem: {
    justifyContent: "flex-end",
    padding: 0,
    marginRight: "7px",
    marginLeft: "7px",
  },
  button: {
    maxHeight: "25px",
    marginBottom: "7px",
    color: "black",
    '&:hover': {
      color: '#FFB2A6',
    }
  },
  icon: {
    marginTop: "10px",
    fontSize: "20px",
    alignItems:"right",
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
  dialogButton: {
    color: "white",
    backgroundColor: "#FFB2A6",
    fontWeight: "bold",
    marginRight: "20px",
    marginBottom: "20px",
  },
}));
export default useStyles;