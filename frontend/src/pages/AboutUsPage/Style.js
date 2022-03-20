import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    minHeight: "90vh",
  },
  pageTitle: {
    color: "#FFB2A6",
    marginTop: "50px",
  },
  introText: {
    fontSize: "15px",
    width: "70%",
  },
  pageBody: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    marginTop: "30px",
    marginBottom: "70px",
  },
  pageSection: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "30px",
  },
  avatar: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    color: "#FFB2A6",
  },
  description: {
    fontSize: "15px",
  },
  socialMediaImg: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
  },
}));
export default useStyles;
