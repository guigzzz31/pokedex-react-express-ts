import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import CustomToUpperCase from "../../hooks/CustomToUpperCase";
import ParseColorDamage from "../../hooks/ParseColorDamage";
import ParseColorDamageValue from "../helpers/ParseColorDamageValue";

const DamageGenerator = (damages: any) => {
  const keys = Object.keys(damages.damages);
  const values = Object.values(damages.damages);
  return (
    <Box sx={{ display: "flex" }}>
      <Grid direction="column" spacing={1} container>
        {keys
          ? keys.map((key: string, i) => {
            return (
              <Grid key={i} item>
                <Box
                  sx={{
                    borderRadius: 8,
                    border: 1,
                    borderWidth: 2,
                    borderColor: "transparent",
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
      <Grid direction="column" spacing={1} container>
        {values
          ? values.map((value: any, i) => {
            return (
              <Grid key={i} item>
                <Box
                  sx={{
                    borderRadius: 8,
                    border: 1,
                    borderWidth: 2,
                    backgroundColor: "#FFF",
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
