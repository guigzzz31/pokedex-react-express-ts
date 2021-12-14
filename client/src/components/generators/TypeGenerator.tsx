import {
  Box,
  Grid,
  Typography
} from "@mui/material";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";
import ParseColorType from "../../hooks/ParseColorType";


type TypeProps = { type: string[] };

export default function TypeGenerator({ type }: TypeProps) {
  return (
    <Grid direction="column" spacing={1} container>
      {type
        ? type.map((item: string) => {
          return (
            <Grid key={item} item>
              <Box
                key={item}
                sx={{
                  borderRadius: 9,
                  width: 77,
                }}
                bgcolor={ParseColorType(item)}
              >
                <Typography
                  key={item}
                  align="center"
                  sx={{
                    color: "#FFF",
                    fontWeight: 900,
                    fontSize: 9,
                  }}
                >
                  {CustomToUpperCase(item)}
                </Typography>
              </Box>
            </Grid>
          );
        })
        : null}
    </Grid>
  );
}