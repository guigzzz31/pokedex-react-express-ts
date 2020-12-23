import React from 'react';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import { Theme, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

type HeaderProps = {
  handlePage: any,
  pageSelected: string
}

export default function Header({ handlePage, pageSelected }: HeaderProps): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);
  return (
    <Box p={6}>
      <Grid direction="row" alignItems="center" justify="center" spacing={5} container>
        <Grid item>
          <Button href="/" onClick={() => handlePage} value="pokedex">
            <Box boxShadow={1} className={classes.button}>
              <Typography className={classes.buttonText}>
                POKEDEX
          </Typography>
            </Box>
          </Button>
        </Grid>
        <Grid item>
          <Button href="/api/pokemons/liked" onClick={() => handlePage} value="pokedex">
            <Box boxShadow={1} className={classes.button}>
              <Typography className={classes.buttonText}>
                LIKED
          </Typography>
            </Box>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
};

//style
interface StyleProps {
  button: BaseCSSProperties,
  buttonText: BaseCSSProperties,
  container: BaseCSSProperties,
  info: BaseCSSProperties
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  button: {
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    width: 200,
  },
  container: {
    backgroundColor: "#E5E5E5",
  },
  buttonText: {
    color: "#000",
    fontWeight: 800,
    letterSpacing: 3,
    textDecoration: "none",
    fontSize: 12,
    padding: 5,
  },
  info: {
    paddingTop: 23,
  }
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);