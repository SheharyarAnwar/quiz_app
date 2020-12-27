import { createMuiTheme } from "@material-ui/core";
import Kanno from "./Assets/Kanno.otf";

const purple: string = "#a76ae4";
const blue: string = "#c7a8fc";
const gray: string = "#f4f2f6";
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    purple?: string;
    blue?: string;
    gray?: string;
  }
  interface PaletteOptions {
    purple?: string;
    blue?: string;
    gray?: string;
  }
}
let theme = createMuiTheme({
  palette: {
    purple,
    blue,
    gray,
    primary: { main: purple },
  },
  overrides: {
    MuiIconButton: {
      label: {
        "& svg": {
          fill: purple,
        },
      },
    },
    MuiFormLabel: {
      asterisk: {
        display: "none",
      },
    },
    MuiInput: {
      root: {
        color: purple,
      },
      underline: {
        "&:hover:not($disabled):before": {
          borderBottom: `3px solid ${blue}`,
          opacity: 0.8,
        },
        "&:before": {
          borderBottom: `3px solid ${blue}`,
        },
        "&:after": {
          borderBottom: `3px solid ${purple}`,
        },
      },
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Kanno],
      },
    },
  },
});
theme.typography.body1 = {
  fontFamily: "Kanno,sans-serif",
  color: theme.palette.purple,
  [theme.breakpoints.down("lg")]: {
    fontSize: "calc( 0.8em + 0.5vw)",
  },
};
theme.typography.h1 = {
  fontFamily: "Kanno,sans-serif",
  letterSpacing: 1,
  fontWeight: 300,
  color: "white",
  [theme.breakpoints.down("lg")]: {
    fontSize: "calc( 1.2em + 3.5vw)",
  },
};
theme.typography.h6 = {
  fontFamily: "Kanno,sans-serif",
  letterSpacing: 1.5,
  lineHeight: 2,
  fontWeight: 300,
  color: "white",
  [theme.breakpoints.down("lg")]: {
    fontSize: "calc( 0.8em + 2vw)",
  },
};

export default theme;
