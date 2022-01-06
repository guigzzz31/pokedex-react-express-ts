import { Box, Avatar, CardMedia, useTheme } from "@mui/material";

type AvatarProps = { img: string, name: string, isDetails?: boolean };

export default function PokemonAvatar({ img, name, isDetails }: AvatarProps): JSX.Element {
  const widthAvatar = ["112px", "120px", "150px", "160px", "200px"]
  const heightAvatar = ["112px", "120px", "150px", "140px", "190px"]
  const widthDetails = ["260px", "330px", "350px", "400px", "450px"]
  const heightDetails = ["230px", "280px", "300px", "350px", "400px"]
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
          width: !isDetails ? widthAvatar : widthDetails,
          height: !isDetails ? heightAvatar : heightDetails,
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