import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import { createStyles, makeStyles, withStyles } from '@mui/styles';
import { createTheme, Theme } from "@mui/material/styles";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";
import ParseColorDamage from "../../hooks/ParseColorDamage";
import ParseColorDamageValue from "../helpers/ParseColorDamageValue";

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      //padding: spacing.unit,
      backgroundColor: palette.background.default,
      color: palette.primary.main,
    },
    typeBox: {
      borderRadius: 9,
      border: 1,
      borderWidth: 2,
      borderColor: "#000",
      width: 80,
    },
    typeText: {
      color: "#FFF",
      fontWeight: 900,
      fontSize: 16,
    },
    typeValue: {
      color: "#FFF",
      fontWeight: 800,
      fontSize: 16,
    }
  });
//withStyles(styles);

const DamageGenerator = (damages: any) => {
  const keys = Object.keys(damages.damages);
  const values = Object.values(damages.damages);
  return (
    <Box>
      <Grid direction="row" spacing={1} container>
        {keys
          ? keys.map((key: string) => {
            return (
              <Grid key={key} item>
                <Box
                  key={key}
                  sx={{
                    borderRadius: 9,
                    border: 1,
                    borderWidth: 2,
                    borderColor: "#000",
                    width: 80,
                    bgcolor: ParseColorDamage(key)
                  }}
                >
                  <Typography
                    key={key}
                    sx={{
                      color: "#FFF",
                      fontWeight: 900,
                      fontSize: 16,
                    }}
                    align="center"
                  >
                    {CustomToUpperCase(key)}
                  </Typography>
                </Box>
              </Grid>
            );
          })
          : null}
      </Grid>
      <Grid direction="row" spacing={1} container>
        {values
          ? values.map((value: any) => {
            return (
              <Grid key={value} item>
                <Box
                  key={value}
                  sx={{
                    borderRadius: 9,
                    border: 1,
                    borderWidth: 2,
                    borderColor: ParseColorDamageValue(value),
                    width: 80,
                  }}
                >
                  <Typography
                    key={value}
                    align="center"
                    style={{ color: ParseColorDamageValue(value) }}
                    sx={{
                      color: "#FFF",
                      fontWeight: 800,
                      fontSize: 16,
                    }}
                  >
                    {CustomToUpperCase(value)}
                  </Typography>
                </Box>
              </Grid>
            );
          })
          : null}
      </Grid>
    </Box>
  );
}

export default DamageGenerator
