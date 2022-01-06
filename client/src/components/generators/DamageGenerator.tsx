import React from "react";

import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import CustomToUpperCase from "../../hooks/CustomToUpperCase";
import ParseColorDamage from "../../hooks/ParseColorDamage";
import ParseColorDamageValue from "../helpers/ParseColorDamageValue";

const DamageGenerator = (damages: any) => {
  const keys = Object.keys(damages.damages);
  const values = Object.values(damages.damages);
  const matches = useMediaQuery('(min-width:1300px)');

  return (
    <>
      <Typography
        sx={{
          color: "#fff",
          fontWeight: 600,
          fontSize: [20, 22, 24, 26, 32],
          paddingBottom: "16px"
        }}
      >
        Strengths and Weaknesses
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: !matches ? "row" : "column",
          justifyContent: "center",
          marginTop: 1
        }}
      >
        <Box sx={{ display: "flex", flexDirection: !matches ? "column" : "row" }}>
          {keys
            ? keys.map((key: string, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    borderRadius: 8,
                    border: 1,
                    borderWidth: 2,
                    borderColor: "transparent",
                    width: 80,
                    bgcolor: ParseColorDamage(key),
                    margin: 0.5

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
              );
            })
            : null}
        </Box>
        <Box sx={{ display: "flex", flexDirection: !matches ? "column" : "row" }}>
          {values
            ? values.map((value: any, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    borderRadius: 8,
                    border: 1,
                    borderWidth: 2,
                    backgroundColor: "#FFF",
                    borderColor: ParseColorDamageValue(value),
                    width: 80,
                    margin: 0.5
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
              );
            })
            : null}
        </Box>
      </Box>
    </>
  );
}

export default DamageGenerator
