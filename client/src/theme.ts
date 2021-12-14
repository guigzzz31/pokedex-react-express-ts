import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
      secondary: "#FFFFFF",
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
  },
});

export default theme