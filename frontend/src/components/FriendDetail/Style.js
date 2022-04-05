import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        fontSize: "10pt",
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: "auto",
        marginRight: "20px",
        marginBottom: "10px",
        backgroundColor: "#FFB2A6",
    },
    friend: {
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
    },
    friendImg: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        objectFit: "cover",
        marginRight: "10px",
    },
    friendUsername: {
        fontSize: "15px",
        fontWeight: "500",
    },
}));
export default useStyles;
