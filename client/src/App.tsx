import { Box } from '@material-ui/core';
import CardPokemon from './components/CardPokemon/CardPokemon';
import PokemonGenerator from './components/generators/PokemonGenerator';
import data from './data.js'
import PokemonProps from './types/Pokemon';

export default function App(): JSX.Element {
  const pokemons: any = data;
  return (
    <Box bgcolor='primary'>
      <div>Pokedex from scratch</div>
      <PokemonGenerator {...pokemons} />
      {/* <CardPokemon {...pokemon} /> */}
    </Box>
  )
};

