import { Typography } from "@mui/material";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";

type NameProps = { name: string };

export default function PokemonName({ name }: NameProps): JSX.Element {

  return (
    <Typography sx={{
      color: "#000",
      fontWeight: 900,
      fontSize: 14,
    }}>
      {CustomToUpperCase(name)}
    </Typography>
  )
}