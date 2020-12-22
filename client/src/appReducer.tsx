// import PokemonProps from './types/Pokemon';

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: action.isLoading }

    case "POKEMONS_FETCH_SUCCESS":
      return { ...state, pokemons: action.pokemons, isLoading: !state.isLoading };

    case "TOGGLE_SHOW_ADD_FORM":
      return { ...state, showAddForm: !state.showAddForm };

    default:
      return state;
  }
};

export default appReducer;
