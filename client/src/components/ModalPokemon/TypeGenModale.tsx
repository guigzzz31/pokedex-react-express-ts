import {
  Box,
  Grid,
  Typography,
} from "@mui/material";


import CustomToUpperCase from "../../hooks/CustomToUpperCase";
import ParseColorType from "../../hooks/ParseColorType";

type TypeProps = { type: string[] };

export default function TypeGenModale({ type }: TypeProps) {
  return (
    <Grid direction="row" spacing={1} container>
      {type
        ? type.map((item: string) => {
          return (
            <Grid key={item} item>
              <Box key={item} sx={{
                borderRadius: 9,
                width: 120,
              }}
                bgcolor={ParseColorType(item)}
              >
                <Typography
                  align="center"
                  sx={{
                    color: "#FFF",
                    fontWeight: 900,
                    fontSize: 16,
                  }}
                  key={item}
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