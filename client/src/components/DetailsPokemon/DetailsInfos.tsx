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
  title: {
    color: theme.palette.primary.dark,
    fontWeight: 900,
    fontSize: 18,
  },
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  paragraph: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    fontSize: 18,
  },
}));

export default function DetailsInfos({ misc }: any): JSX.Element {
  const classes = useStyles()
  return (
    <Box m={1} mt={3}>
      <Box>
        <Box>
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
                  <Typography sx={{ paddingTop: 2 }}>{item},</Typography>
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
                <Typography sx={{ paddingTop: 2 }}>{item},</Typography>
              </Box>)
            })}
          </Box>
        </Box>
        <Box>
          <Box>
            <Box className={classes.container}>
              <Box>
                <FemaleIcon
                  sx={{
                    color: "#B92941",
                    fontSize: "44px",
                  }}
                />
                <Box>
                  <Typography
                    className={classes.paragraph}
                    sx={{
                      fontSize: 18,
                    }}
                  >
                    {misc.sex.female} %
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <MaleIcon
                    sx={{
                      color: "#B92941",
                      fontSize: "44px",
                    }}
                  />
                </Box>
                <Box>
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
            </Box>
            <Box className={classes.container}>
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#B92941",
                      fontWeight: 900,
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
                    sx={{
                      color: "#B92941",
                      fontWeight: 900,
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
        </Box>
      </Box>
    </Box>
  )
}