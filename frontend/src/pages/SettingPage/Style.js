import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#F0F0F0",
    minHeight: "100vh",
  },
  title: {
    fontWeight: "bold",
    marginTop: "10px",
    fontSize: "30px",
  },
  button: {
    color: "black",
    "&:hover": {
      color: "#FFB2A6",
    },
  },
  icon: {
    marginTop: "10px",
    fontSize: "40px",
  },
  iconSetting: {
    marginTop: "10px",
    fontSize: "30px",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  item: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    marginBottom: "20px",
    width: "80%",
  },
  alignItem: {
    fontSize: "10pt",
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "auto",
    marginRight: "20px",
    marginBottom: "10px",
    marginTop: "20px",
  },
}));
export default useStyles;
