import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import { ETypes, typesMapColor } from "../../types/TypesColor";
import CustomToUpperCase from "../../hooks/CustomToUpperCase";

type TypeProps = { type: string[], isDetails?: boolean };

export default function TypeGenerator({ type, isDetails }: TypeProps) {
  return (
    <Grid direction={!isDetails ? "column" : "row"} spacing={1} container>
      {type
        ? type.map((item: string) => {
          return (
            <Grid key={item} item>
              <Box key={item} sx={{
                borderRadius: 9,
                width: !isDetails ? 77 : 120,
              }}
                bgcolor={typesMapColor[item as ETypes]}
              >
                <Typography
                  align="center"
                  sx={{
                    color: "#FFF",
                    fontWeight: 900,
                    fontSize: !isDetails ? 10 : 16,
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