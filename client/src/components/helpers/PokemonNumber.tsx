import { Typography } from "@mui/material";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";

type NumberProps = { id: string };

export default function PokemonNumber({ id }: NumberProps): JSX.Element {

  return (
    <Typography sx={{
      color: "#e1f2fe",
      fontWeight: 900,
      fontSize: [20, 22, 24, 26, 32],
    }}>
      {CustomToUpperCase(id)}
    </Typography>
  )
}