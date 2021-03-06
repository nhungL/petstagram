import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    minHeight: "100vh",
  },
  avatar: {
    marginTop: "20px",
    width: 100,
    height: 100,
  },
  container: {
    width: "100vw",
    height: "100%",
  },
  post: {
    backgroundColor: "#FFFFFF",
    width: "95%",
    borderRadius: "20px",
    boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    margin: "15px 0",
  },
  pad: {
    padding: "15px",
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  subtitle: {
    marginBottom: "10px",
    fontSize: 13,
  },
}));
export default useStyles;
