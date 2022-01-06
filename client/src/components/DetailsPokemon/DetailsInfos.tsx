import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { ThemeCustom } from "../../theme";

const useStyles = makeStyles((theme: ThemeCustom) => ({
  superContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginTop: 12,
    marginBottom: 12
  },
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
    marginBottom: 12
  },
  title: {
    color: theme.palette.primary.dark,
    fontWeight: 900,
    fontSize: 18,
    textAlign: "center",
  },
  paragraph: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    fontSize: 18,
    textAlign: "center",
  },
  icon: {
    color: theme.palette.primary.dark,
    fontSize: "44px",
    textAlign: "center",
  },
}));

export default function DetailsInfos({ misc }: any): JSX.Element {
  const classes = useStyles()
  return (
    <Box className={classes.superContainer}>
      <Box className={classes.container}>
        <Box>
          <Box>
            <Typography
              className={classes.title}
              sx={{
                fontSize: 18,
              }}
            >
              Abilities
            </Typography>
          </Box>
          {misc.abilities.normal.map((item: any) => {
            return (
              <Box key={item}>
                <Typography className={classes.paragraph}>{item}{misc.abilities.normal.length > 1 ? "," : ""}</Typography>
              </Box>
            )
          })}
        </Box>
        <Box>
          <Box>
            <Typography
              className={classes.title}
              sx={{
                fontSize: 18,
              }}
            >
              Hidden
            </Typography>
          </Box>
          {misc.abilities.hidden.map((item: any) => {
            return (<Box key={item}>
              <Typography className={classes.paragraph}>{item}{misc.abilities.hidden.length > 1 ? "," : ""}</Typography>
            </Box>)
          })}
        </Box>
      </Box>
      <Box className={classes.container}>
        <Box>
          <FemaleIcon
            className={classes.icon}
          />
          <Typography
            className={classes.paragraph}
            sx={{
              fontSize: 18,
            }}
          >
            {misc.sex.female} %
          </Typography>
        </Box>
        <Box>
          <MaleIcon
            className={classes.icon}
          />
          <Typography
            className={classes.paragraph}
            sx={{
              fontSize: 18,
            }}
          >
            {misc.sex.male} %
          </Typography>
        </Box>

      </Box>
      <Box className={classes.container}>
        <Box>
          <Box>
            <Typography
              className={classes.title}
              sx={{
                fontSize: 18,
              }}
            >
              HEIGHT
            </Typography>
          </Box>
          <Box>
            <Typography
              className={classes.paragraph}
              sx={{
                fontSize: 18,
              }}
            >
              {misc.height}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography
              className={classes.title}
              sx={{
                fontSize: 18,
              }}
            >
              WEIGHT
            </Typography>
          </Box>
          <Box>
            <Typography
              className={classes.paragraph}
              sx={{
                fontSize: 18,
              }}
            >
              {misc.weight}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}