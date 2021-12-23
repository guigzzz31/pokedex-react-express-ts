import { Box, Avatar, CardMedia, useTheme } from "@mui/material";
import { ThemeCustom } from "../../theme";

type AvatarProps = { img: string };

export default function PokemonAvatar({ img }: AvatarProps): JSX.Element {
  const widthAvatar = ["50px", "70px", "150px", "160px", "200px"]
  const heightAvatar = ["50px", "70px", "150px", "140px", "190px"]
  const theme = useTheme()

  return (
    <Box>
      <CardMedia
        component="img"
        image={img}
        alt={img}
        sx={{
          objectFit: "contain",
          borderRadius: 6,
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