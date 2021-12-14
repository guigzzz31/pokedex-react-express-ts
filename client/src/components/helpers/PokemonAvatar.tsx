import { Box, Avatar } from "@mui/material";

type AvatarProps = { img: string };

export default function PokemonAvatar({ img }: AvatarProps): JSX.Element {

  return (
    <Box>
      <Avatar src={img} alt={img} sx={{
        width: 126,
        height: 117
      }} />
    </Box>
  )
}