import {
  Box,
  Button,
  Typography,
} from "@mui/material";



type HeaderProps = {
  handlePage: any,
  pageSelected: string
}

export default function Header({ handlePage, pageSelected }: HeaderProps): JSX.Element {
  return (
    <Box p={6}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box>
          <Button href="/" onClick={() => handlePage} value="pokedex">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: "#FFFFFF",
                width: 200,
              }}>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: 800,
                  letterSpacing: 3,
                  textDecoration: "none",
                  fontSize: 12,
                  padding: 5,
                }}>
                POKEDEX
              </Typography>
            </Box>
          </Button>
        </Box>
        <Box>
          <Button href="/api/pokemons/liked" onClick={() => handlePage} value="pokedex">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: "#FFFFFF",
                width: 200,
              }}>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: 800,
                  letterSpacing: 3,
                  textDecoration: "none",
                  fontSize: 12,
                  padding: 5,
                }}>
                LIKED
              </Typography>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  )
};
