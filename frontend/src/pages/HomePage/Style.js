import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#F0F0F0",
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
    marginTop: "50px",
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
  item: {
    backgroundColor: "#FFFFFF",
    border: "5px solid #F0F0F0",
    borderRadius: 20,
  },
}));
export default useStyles;
