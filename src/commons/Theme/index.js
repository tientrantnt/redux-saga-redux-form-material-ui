import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme ({
    color : {
        primary : "#F44336",
        secondary : "#00BCD4",
        error :"#D32F2F",
        textColor: "#FFFFFF"
    },
    typography : {
        fontFamily : "Roboto"
    },
    shape : {
        borderRadius : 4,
        backgroundColor: "#E040FB",
        textColor : "white",
        borderColor: "#CCCCCC",
    }
});
export default theme ; 