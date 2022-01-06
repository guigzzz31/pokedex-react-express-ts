import React, { useEffect } from "react";
import axios from "axios";
import { TInitialState } from "../appReducer";

const useFetchPokemons = (dispatch: React.Dispatch<Partial<TInitialState>>) => {
  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch({
        type: "START_LOADING",
        isLoading: true
      })
      try {
        const result = await axios("/api/pokemons");
        dispatch({
          type: "POKEMONS_FETCH_SUCCESS",
          pokemons: result.data.result,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, [dispatch]);
};

export default useFetchPokemons;
