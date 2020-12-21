import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      //white
      main: "#FFFFFF",
    },
    secondary: {
      //grey
      main: "#C4C4C4",
      dark: "#E9E9E9",
      light: "#E4E4E4",
    },
    text: {
      //black
      primary: "#000000",
      secondary: "#191516",
    },
    error: {
      //blush
      main: "#DA627D",
    },
    info: {
      main: "#64b5f6",
    },
    //mint cream
    background: {
      default: "#E5E5E5",
    },
    //font families
    typography: {
      fontFamily: ["Roboto", "Quicksand", "Montserrat", "Lato"].join(","),
    },
  },
});

export default theme;
