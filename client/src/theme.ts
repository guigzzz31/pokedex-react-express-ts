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
      light: string
    },
    info:
    {
      main: string,
      light: string
    },
    background: {
      default: string
    },
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
      //blue
      main: "#52AEF7",
      dark: "#2D92D0",
      light: "#7AC2F9",
    },
    text: {
      //black
      primary: "#000000",
      //white-ice
      secondary: "#e1f2fe",
    },
    error: {
      //blush
      main: "#45B69C",
      light: "#FED766"
    },
    info: {
      main: "#3fd349",
    },
    //mint cream
    background: {
      default: "#E5E5E5",
    },
    //font families
  },
});

export default theme