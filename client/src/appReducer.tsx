import PokemonProps from './types/Pokemon';

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: action.isLoading }

    case "POKEMONS_FETCH_SUCCESS":
      return { ...state, pokemons: action.pokemons, isLoading: !state.isLoading };

    // case "WILDER_ADDED":
    //   return {
    //     ...state,
    //     showAddForm: false,
    //     successMessage: `The wilder ${action.newWilder.name} has been successfully added`,
    //     wilders: [{ ...action.newWilder, justAdded: true }, ...state.wilders],
    //   };

    // case "WILDER_DELETED":
    //   return {
    //     ...state,
    //     wilders: [
    //       { ...action.deletedWilder, justDeleted: true },
    //       ...state.wilders,
    //     ],
    //     deletedMessage: `The wilder ${action.deletedWilder.name} has been deleted`,
    //   };

    case "TOGGLE_SHOW_ADD_FORM":
      return { ...state, showAddForm: !state.showAddForm };

    default:
      return state;
  }
};

export default appReducer;
