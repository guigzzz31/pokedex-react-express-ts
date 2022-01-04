import { Typography } from "@mui/material";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";

type NameProps = { name: string };

export default function PokemonName({ name }: NameProps): JSX.Element {

  return (
    <Typography sx={{
      color: "#fff",
      fontWeight: 700,
      fontSize: [22, 24, 26, 28, 34],
    }}>
      {name}
    </Typography>
  )
}