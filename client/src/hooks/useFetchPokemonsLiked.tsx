import React, { useEffect } from "react";
import axios from "axios";
import { TInitialState } from "../appReducer";

const useFetchPokemonsLiked = (dispatch: React.Dispatch<Partial<TInitialState>>) => {
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const result = await axios("/api/pokemons/liked");
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
