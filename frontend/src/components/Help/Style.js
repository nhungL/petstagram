import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    background: {
        margin: "50px",
    },
    title: {
        fontWeight: "bold",
        marginBottom: "20px",
        marginTop: "20px",
    },
    inputText: {
        marginTop: "8px",
        color: "#C4C4C4",
        fontWeight: "bold",
    },

    //for typing effect
    inputBox: {
        marginBottom: "5px",
        width: "100%",
    },
    input: {
        color: "black",
        '&$focused $notchedOutline': {
            borderColor: '#FFB2A6',
        }
    },
    focused: {},
    notchedOutline: {},
    pad: {
        padding: "15px",
    },

    button: {
        backgroundColor: "#FFB2A6",
        fontWeight: "bold",
        marginRight: "20px",
      },
}));
export default useStyles;
