import { useEffect } from "react";
import axios from "axios";
import PokemonProps from "../types/Pokemon";

const useFetchPokemonsLiked = (dispatch: any) => {
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const result = await axios("/api/pokemons/liked");
        console.log("result", result.data.result)
        dispatch({
          type: "POKEMONS_LIKED_FETCH_SUCCESS",
          likedPokemons: result.data.result,
          isLoading: false
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, [dispatch]);
};

export default useFetchPokemonsLiked;
