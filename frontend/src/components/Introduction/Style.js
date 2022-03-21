import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    intro: {
        backgroundColor: "#FFFFFF",
        width: "90%",
        borderRadius: "20px",
        boxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
        margin: "15px",
    },
    title: {
        fontWeight: "bold",
        marginBottom: "10px",
    },
    subtitle: {
        color: "#C4C4C4",
        marginBottom: "40px",
        fontSize: 12,
    },
    introdata: {
        fontSize: "10pt",
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: "auto",
        marginRight: "20px",
        marginBottom: "10px",
    },
    circleicon: {
        marginRight: "10px",
        fontSize: "20px",
    },
    pad: {
        padding: "15px",
    },
}));
export default useStyles;