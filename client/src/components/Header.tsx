import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeCustom } from "../theme";



type HeaderProps = {
  handlePage: any,
  pageSelected: string
}

const useStyles = makeStyles((theme: ThemeCustom) => ({
  selected: {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 18,
  },
  unSelected: {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 18,
  },
}));


export default function Header({ handlePage, pageSelected }: HeaderProps): JSX.Element {
  console.log("page selected", pageSelected)
  const classes = useStyles()
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
      <Box>
        <Button href="/" onClick={() => handlePage} value="pokedex">
          <Box
            className={classes.selected}
            sx={{
              borderColor: pageSelected === "pokedex" ? "#FFF" : "#ee7186"
            }}>
            <Typography
              sx={{
                color: pageSelected === "pokedex" ? "#FFF" : "#B92941",
                fontWeight: 800,
                letterSpacing: 3,
                textDecoration: "none",
                fontSize: 16,
              }}>
              POKEDEX
            </Typography>
          </Box>
        </Button>
      </Box>
      <Box>
        <Button href="/api/pokemons/liked" onClick={() => handlePage} value="pokedex">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 18,
              backgroundColor: "#FFFFFF",
            }}>
            <Typography
              sx={{
                color: pageSelected === "pokedex" ? "#FFF" : "#ee7186",
                fontWeight: 800,
                letterSpacing: 3,
                textDecoration: "none",
                fontSize: 16,
              }}>
              LIKED
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  )
};
