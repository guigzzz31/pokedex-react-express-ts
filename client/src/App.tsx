import CardPokemon from './components/CardPokemon/CardPokemon';
import data from './data.js'
import PokemonProps from './types/Pokemon';

export default function App(): JSX.Element {
  const pokemon: PokemonProps = data;
  return (
    <>
      <div>Hello React App from scratch</div>
      <CardPokemon {...pokemon} />
    </>
  )
};

