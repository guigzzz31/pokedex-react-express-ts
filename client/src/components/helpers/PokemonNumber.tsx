import { Typography } from "@mui/material";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";

type NumberProps = { id: string };

export default function PokemonNumber({ id }: NumberProps): JSX.Element {

  return (
    <Typography sx={{
      color: "#FFF",
      fontWeight: 900,
      fontSize: [16, 20, 22, 32],
    }}>
      {CustomToUpperCase(id)}
    </Typography>
  )
}