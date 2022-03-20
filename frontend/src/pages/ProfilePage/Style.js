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
    marginRight: "20px",
    marginBottom: "40px",
    fontSize: 12,
  },
  container: {
    width: "100vw",
    height: "100hw",
  },
  item: {
    backgroundColor: "#FFFFFF",
    width: "95%",
    borderRadius: 20,
    boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
  },
  introdata: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: "auto",
    marginRight: "20px",
  },
  circleicon: {
    marginRight: "20px",
  },
  pad: {
    padding: "0",
  },
}));
export default useStyles;