import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import PokemonAvatar from "../helpers/PokemonAvatar";
import PokemonNumber from "../helpers/PokemonNumber";
import PokemonName from "../helpers/PokemonName";
import TypeGenerator from "../generators/TypeGenerator";


type CardPokemonProps = { id: string, name: string, img: string, type: string[] };

export default function InfoPokemon({ id, name, img, type }: CardPokemonProps): JSX.Element {
  return (
    <Box>
      <Grid
        justify="center"
        alignItems="center"
        spacing={1}
        container
      >
        <Grid item>
          <Button>
            <PokemonAvatar img={img} />
          </Button>
        </Grid>
        <Grid item>
          <Box p={1}>
            <Box mb={1}>
              <Grid spacing={1} container>
                <Grid item>
                  <PokemonNumber id={id} />
                </Grid>
                <Grid item>
                  <PokemonName name={name} />
                </Grid>
              </Grid>
            </Box>
            <TypeGenerator type={type} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
