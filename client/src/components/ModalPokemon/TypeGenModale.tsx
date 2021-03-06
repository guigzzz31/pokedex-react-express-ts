import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import CustomToUpperCase from "../../hooks/CustomToUpperCase";
import ParseColorType from "../../hooks/ParseColorType";

type TypeProps = { type: string[] };

export default function TypeGenModale({ type }: TypeProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  return (
    <Grid direction="row" spacing={1} container>
      {type
        ? type.map((item: string) => {
          return (
            <Grid key={item} item>
              <Box key={item} className={classes.typeBox} bgcolor={ParseColorType(item)}>
                <Typography align="center" className={classes.typeText} key={item}>{CustomToUpperCase(item)}</Typography>
              </Box>
            </Grid>
          );
        })
        : null}
    </Grid>
  );
}

//style
interface StyleProps {
  typeBox: BaseCSSProperties,
  typeText: BaseCSSProperties,
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  typeText: {
    color: "#FFF",
    fontWeight: 900,
    fontSize: 16,
  },
  typeBox: {
    borderRadius: 9,
    width: 120,
  }
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);