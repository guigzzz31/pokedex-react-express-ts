
const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: action.isLoading }

    case "POKEMONS_FETCH_SUCCESS":
      return { ...state, pokemons: action.pokemons, isLoading: action.isLoading };

    case "POKEMONS_LIKED_FETCH_SUCCESS":
      return { ...state, likedPokemons: action.likedPokemons };

    case "TOGGLE_SHOW_MODALE":
      return { ...state, showAddForm: !state.showAddForm };

    default:
      return state;
  }
};

export default appReducer;
