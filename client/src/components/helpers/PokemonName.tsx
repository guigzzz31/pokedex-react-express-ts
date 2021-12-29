import { Typography } from "@mui/material";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";

type NameProps = { name: string };

export default function PokemonName({ name }: NameProps): JSX.Element {

  return (
    <Typography sx={{
      color: "#e1f2fe",
      fontWeight: 700,
      fontSize: [18, 24, 28, 34],
    }}>
      {name}
    </Typography>
  )
}