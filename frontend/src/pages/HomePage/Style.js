import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#F0F0F0",
    display: "flex",
    flexDirection: "column",
  },
  container: {
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
  // item: {
  //   backgroundColor: "#FFFFFF",
  //   width: "95%",
  //   borderRadius: 20,
  //   boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
  // },
}));
export default useStyles;
