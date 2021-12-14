import {
  Typography
} from "@mui/material";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";

type NumberProps = { id: string };

export default function PokemonNumberModale({ id }: NumberProps): JSX.Element {
  return (
    <Typography
      sx={{
        color: "#9E9E9E",
        fontWeight: 900,
        fontSize: 40,
      }}>
      {CustomToUpperCase(id)}
    </Typography>
  )
}