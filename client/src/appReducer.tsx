import PokemonProps from "./types/Pokemon";

export type TInitialState = {
  type: string,
  isLoading: boolean,
  pokemons: PokemonProps[],
  likedPokemons: PokemonProps[],
  pokemonDetails: PokemonProps | {},
  //showAddForm: boolean
}

export const initialState: TInitialState = {
  type: "",
  isLoading: false,
  pokemons: [],
  likedPokemons: [],
  pokemonDetails: {},
};

const appReducer = (state: TInitialState, action: any) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: action.isLoading }

    case "POKEMONS_FETCH_SUCCESS":
      return { ...state, pokemons: action.pokemons, isLoading: action.isLoading };

    case "POKEMON_DETAILS_FETCH_SUCCESS":
      return { ...state, pokemonDetails: action.pokemonDetails }

    case "POKEMONS_LIKED_FETCH_SUCCESS":
      return { ...state, likedPokemons: action.likedPokemons };

    // case "TOGGLE_SHOW_MODALE":
    //   return { ...state, showAddForm: !state.showAddForm };

    default:
      return state;
  }
};

export default appReducer;
