import { createTheme } from "@mui/material/styles";

export type ThemeCustom = {
  palette: {
    primary: {
      main: string,
      dark: string,
      light: string,
    },
    secondary: {
      main: string,
      dark: string,
      light: string,
    },
    text: {
      primary: string,
      secondary: string,
    }
    error: {
      main: string,
    }
    info:
    {
      main: string,
    }
    background: {
      default: string
    }
  },
}

const theme: ThemeCustom = createTheme({
  palette: {
    primary: {
      //red
      main: "#de435c",
      dark: "#B92941",
      light: "#ee7186",
    },
    secondary: {
      //green
      main: "#45b69c",
      dark: "#E9E9E9",
      light: "#21d19f",
    },
    text: {
      //black
      primary: "#000000",
      secondary: "#e1f2fe",
    },
    error: {
      //blush
      main: "#DA627D",
    },
    info: {
      main: "#2d92d0",
    },
    //mint cream
    background: {
      default: "#E5E5E5",
    },
    //font families
  },
});

export default theme