import {
  Box,
  Button,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { ContextTypeCustom, useTabs } from "../AppContext";
import { ThemeCustom } from "../theme";



type HeaderProps = {
  handlePage?: any,
  pageSelected?: string
}

const useStyles = makeStyles((theme: ThemeCustom) => ({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 24,
  },
  selected: {
    //backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "center",
    border: "solid",
    borderWidth: 2,
    borderRadius: 18,
    padding: 12,
  },
  textSelected: {
    color: theme.palette.text.secondary,
    fontWeight: 800,
    letterSpacing: 3,
    fontSize: 16,
  },
  unselected: {
    //backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    border: "solid",
    borderColor: theme.palette.primary.light,
    borderWidth: 2,
    borderRadius: 18,
    padding: 12,
  },
  textUnselected: {
    color: theme.palette.primary.light,
    fontWeight: 800,
    letterSpacing: 3,
    fontSize: 16,
  },
}));


export default function Header({ handlePage, pageSelected }: HeaderProps): JSX.Element {
  const classes = useStyles()
  console.log("currentTab", pageSelected)
  return (
    <Box className={classes.container}>
      <Box
        onClick={() => handlePage('pokedex')}
        className={pageSelected === "pokedex" ? classes.selected : classes.unselected}
      >
        <Link style={{ textDecoration: 'none' }} to="/">
          <Typography className={pageSelected === "pokedex" ? classes.textSelected : classes.textUnselected}>
            POKEDEX
          </Typography>
        </Link>
      </Box >
      <Box
        onClick={() => handlePage('liked')}
        className={pageSelected === "liked" ? classes.selected : classes.unselected}
      >
        <Link
          style={{ textDecoration: 'none' }}
          to="/api/pokemons/liked"
        >
          <Typography className={pageSelected === "liked" ? classes.textSelected : classes.textUnselected}>
            LIKED
          </Typography>
        </Link>
      </Box>
    </Box >
  )
};
