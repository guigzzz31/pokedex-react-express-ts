import { useEffect } from "react";
import axios from "axios";
import PokemonProps from "../types/Pokemon";

const useFetchPokemons = (dispatch: any) => {
  useEffect(() => {
    const fetchPokemons = async () => {
      // dispatch({
      //   type: "START_LOADING",
      //   isLoading: true
      // })
      try {
        const result = await axios("/api/pokemons");
        // let pokemons = result.data.result.map((pokemon: any) => {
        //   return {
        //     id: pokemon.id,
        //     _id: pokemon._id,
        //     name: pokemon.name,
        //     img: pokemon.img,
        //     damages: pokemon.damages,
        //     misc: pokemon.misc,
        //     stats: pokemon.stats,
        //     type: pokemon.type,
        //   }
        // })
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
