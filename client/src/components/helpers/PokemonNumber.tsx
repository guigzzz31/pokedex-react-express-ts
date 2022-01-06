import { Typography } from "@mui/material";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";

type NumberProps = { id: string, isDetail?: boolean };

export default function PokemonNumber({ id, isDetail }: NumberProps): JSX.Element {
  const sizeCard = [20, 22, 24, 26, 32]
  const sizeDetail = [32, 34, 36, 44]
  return (
    <Typography sx={{
      color: "#e1f2fe",
      fontWeight: 900,
      fontSize: !isDetail ? sizeCard : sizeDetail,
    }}>
      {CustomToUpperCase(id)}
    </Typography>
  )
}