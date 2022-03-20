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
    fontWeight: "bold",
    marginTop: "20px",
    marginLeft: "20px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#C4C4C4",
    marginLeft: "20px",
    marginBottom: "40px",
    fontSize: 12,
  },
  container: {
    width: "100vw",
    height: "100hw",
  },
  item: {
    backgroundColor: 'white',
    border: "5px solid #F0F0F0",
    borderRadius: 20,
  },
  pad: {
    padding: "0",
  },
}));
export default useStyles;