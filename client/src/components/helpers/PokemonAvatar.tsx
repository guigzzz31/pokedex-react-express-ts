import { Box, Avatar, CardMedia, useTheme } from "@mui/material";

type AvatarProps = { img: string, name: string };

export default function PokemonAvatar({ img, name }: AvatarProps): JSX.Element {
  const widthAvatar = ["112px", "120px", "150px", "160px", "200px"]
  const heightAvatar = ["112px", "120px", "150px", "140px", "190px"]
  const theme = useTheme()

  return (
    <Box>
      <CardMedia
        component="img"
        image={img}
        alt={name}
        sx={{
          objectFit: "contain",
          borderRadius: [4, 6],
          backgroundColor: "#FFF",
          boxShadow: "20px 20px 60px #ca6072, -20px -20px 60px #ff829a",
          width: widthAvatar,
          height: heightAvatar,
        }}
      />
      {/* <Avatar src={img} alt={img}
        sx={{
          objectFit: "cover",
          borderRadius: 6,
          boxShadow: "20px 20px 60px #ca6072, -20px -20px 60px #ff829a",
          width: widthAvatar,
          height: widthAvatar,
          backgroundColor: "#de435c",
        }}
      /> */}
    </Box>
  )
}