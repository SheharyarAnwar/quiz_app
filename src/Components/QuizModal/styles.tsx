import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginTop: "3%",
    [theme.breakpoints.down("md")]: {
      marginTop: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "30%",
    },
    borderRadius: "50px",
    zIndex: 2,
    boxShadow: "10px 10px 15px 1px rgba(0,0,0,0.25)",
    backgroundColor: theme.palette.gray,
  },
  radioOptionSelection: {
    height: "60%",
    width: "60%",
    borderRadius: "50%",
    transform: "scale(0)",
    backgroundColor: theme.palette.purple,
  },
  radioOption: {
    cursor: "pointer",
    width: "25px",
    height: "25px",
    minWidth: "25px",
    minHeight: "25px",
    borderRadius: "50%",
    marginRight: "5%",
    backgroundColor: theme.palette.blue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    margin: "8% 10%",
  },
  options: {
    margin: "6% 10%",
    marginTop: "0",
  },
}));
export default style;
