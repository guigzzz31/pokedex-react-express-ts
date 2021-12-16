import { Box, Avatar, CardMedia, useTheme } from "@mui/material";
import { ThemeCustom } from "../../theme";

type AvatarProps = { img: string };

export default function PokemonAvatar({ img }: AvatarProps): JSX.Element {
  const widthAvatar = ["50px", "70px", "180px", "190px", "230px"]
  const heightAvatar = ["50px", "70px", "160px", "170px", "210px"]
  const theme = useTheme()

  return (
    <Box>
      {/* <CardMedia
        component="img"
        image={img}
        alt={img}
        sx={{
          borderRadius: 6,
          boxShadow: "20px 20px 60px #ca6072, -20px -20px 60px #ff829a",
          width: widthAvatar,
          height: heightAvatar,
        }}
      /> */}
      <Avatar src={img} alt={img}
        sx={{
          borderRadius: 6,
          boxShadow: "20px 20px 60px #ca6072, -20px -20px 60px #ff829a",
          width: widthAvatar,
          height: heightAvatar,
          backgroundColor: "#de435c",
        }}
      />
    </Box>
  )
}