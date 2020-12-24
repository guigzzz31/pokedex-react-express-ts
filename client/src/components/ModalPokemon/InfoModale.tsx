import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography";


export default function InfoModale({ misc }: any): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);

  return (
    <Box m={1} mt={3}>
      <Grid direction="column" spacing={3} container>
        <Grid item>
          <Grid spacing={2} container>
            <Grid item>
              <Typography className={classes.titleText}>Abilities </Typography>
            </Grid>
            {misc.abilities.normal.map((item: any) => {
              return (<Grid key={item} item>
                <Typography style={{ paddingTop: 2 }}>{item},</Typography>
              </Grid>)
            })}
          </Grid>
          <Grid spacing={2} container>
            <Grid item>
              <Typography align="center" className={classes.titleText}>Hidden </Typography>
            </Grid>
            {misc.abilities.hidden.map((item: any) => {
              return (<Grid key={item} item>
                <Typography style={{ paddingTop: 2 }}>{item},</Typography>
              </Grid>)
            })}
          </Grid>
        </Grid>
        <Grid item>

          <Grid spacing={2} container>
            <Grid item >
              <Box>
                <Grid spacing={2} container>
                  <Grid item>
                    <Typography className={classes.titleText}>female</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{misc.sex.female} %</Typography>
                  </Grid>
                </Grid>
                <Grid spacing={2} container>
                  <Grid item>
                    <Typography className={classes.titleText}>male</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{misc.sex.male} %</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Grid spacing={2} container>
                  <Grid item>
                    <Typography className={classes.titleText}>height</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{misc.height}</Typography>
                  </Grid>
                </Grid>
                <Grid spacing={2} container>
                  <Grid item>
                    <Typography className={classes.titleText}>weight</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{misc.weight}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

//style
interface StyleProps {
  titleText: BaseCSSProperties,
  valueText: BaseCSSProperties
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  titleText: {
    color: "#000",
    fontWeight: 900,
    fontSize: 18,
  },
  valueText: {
    color: "#000",
    fontWeight: 600,
    fontSize: 18,
  }
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);