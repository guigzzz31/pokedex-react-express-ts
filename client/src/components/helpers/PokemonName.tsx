import { Typography } from "@mui/material";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";

type NameProps = { name: string, isDetail?: boolean };

export default function PokemonName({ name, isDetail }: NameProps): JSX.Element {
  const sizeCard = [22, 24, 26, 28, 34]
  const sizeDetail = [32, 34, 36, 44]
  return (
    <Typography sx={{
      color: "#fff",
      fontWeight: 700,
      fontSize: !isDetail ? sizeCard : sizeDetail,
    }}>
      {name}
    </Typography>
  )
}