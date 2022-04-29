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
        marginBottom: "10px",
        fontSize: 13,
    },
    introdata: {
        fontSize: "10pt",
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: "auto",
        marginRight: "20px",
        marginBottom: "30px",
    },
    circleicon: {
        marginRight: "10px",
        fontSize: "20px",
    },
    pad: {
        padding: "15px",
    },
    button: {
        maxHeight: "25px",
        backgroundColor: "#FFB2A6",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    inputBox: {
        marginRight: "20px",
        marginBottom: "5px",
        width: "100%",
    },
    changeIntro: {
        marginRight: "20px",
        marginBottom: "30px",
        width: "100%",
    },
    inputIntro: {
        color: "black",
        borderRadius: 20,
        "&$focused $notchedOutline": {
            borderColor: "#FFB2A6",
        },
        fontSize: "10pt",
    },
    focused: {},
    notchedOutline: {},
    saveButton: {
        maxHeight:"20px",
        color: "black",
        borderColor: "#FFB2A6",
        marginBottom: "20px",
    },
}));
export default useStyles;