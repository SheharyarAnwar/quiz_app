import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.gray,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  leftBezier: {
    position: "absolute",
    left: 0,
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rightBezier: {
    position: "absolute",
    right: 0,
    height: "100vh",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button: {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    height: "30px",
    padding: "10px",
    "&:focus": {
      border: "none",
      outline: "none",
    },
    "&:hover": {
      opacity: "0.8",
    },
  },
}));
export default style;
