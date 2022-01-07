import {
  Box,
  Button,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { borderRadius } from "@mui/system";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext, ContextTypeCustom } from "../../AppContext";
import { ThemeCustom } from "../../theme";
import Indicators from "./Indicators";
import LightBulb from "./LightBulb";

const useStyles = makeStyles((theme: ThemeCustom) => ({
  superContainer: {
    position: "fixed",
    zIndex: 99,
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },
  indicatorsContainer: {
    position: "absolute",
    top: 4,
    left: 40
  },
  container: {
    display: "flex",
    //width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "inset -41px -41px 82px #bd394e, inset 41px 41px 82px #ff4d6a;",
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
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


export default function Header(): JSX.Element {
  const classes = useStyles()
  const { currentTab, handleChange } = useContext(AppContext)

  console.log("current tab context", currentTab)

  return (
    <Box className={classes.superContainer}>
      <Box className={classes.indicatorsContainer}>
        <Indicators />
      </Box>
      <Box
        className={classes.container}
        py="16px"
        px="16px"
      >
        <LightBulb />
        <Box
          onClick={() => handleChange && handleChange('pokedex')}
          className={currentTab === "pokedex" ? classes.selected : classes.unselected}
        >
          <Link style={{ textDecoration: 'none' }} to="/">
            <Typography className={currentTab === "pokedex" ? classes.textSelected : classes.textUnselected}>
              POKEDEX
            </Typography>
          </Link>
        </Box>
        <Box
          onClick={() => handleChange && handleChange('liked')}
          className={currentTab === "liked" ? classes.selected : classes.unselected}
        >
          <Link
            style={{ textDecoration: 'none' }}
            to="/api/pokemons/liked"
          >
            <Typography className={currentTab === "liked" ? classes.textSelected : classes.textUnselected}>
              LIKED
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
};
