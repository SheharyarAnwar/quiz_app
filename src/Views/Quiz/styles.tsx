import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.gray,
    position: "relative",
  },
  containerRoot: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  textContainer: {
    position: "relative",
    marginTop: "5%",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    "& h6": {
      marginLeft: "100%",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "14%",
      },
    },
  },
  upperCircle: {
    backgroundColor: theme.palette.purple,
    position: "absolute",
    width: "103vw",
    height: "103vw",
    borderRadius: "50%",
    left: "50%",
    transform: "translate(-50%, -60%)",
    zIndex: 1,
  },
  lowerCircle: {
    backgroundColor: theme.palette.blue,
    position: "absolute",
    width: "120vw",
    height: "120vw",
    borderRadius: "50%",
    left: "50%",
    transform: "translate(-50%, -60%)",
  },
}));
export default style;
