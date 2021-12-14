import {
  Box,
  Avatar
} from "@mui/material";

type AvatarProps = { img: string };

export default function PokemonAvatarModale({ img }: AvatarProps): JSX.Element {
  return (
    <Box>
      <Avatar src={img} alt={img} sx={{ width: 400, height: 400 }} />
    </Box>
  )
}