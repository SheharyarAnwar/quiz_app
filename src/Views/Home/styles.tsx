import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.gray,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
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
