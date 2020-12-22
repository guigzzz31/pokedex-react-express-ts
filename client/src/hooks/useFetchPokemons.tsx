import { useEffect } from "react";
import axios from "axios";

const useFetchPokemons = (dispatch: any) => {
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const result = await axios("/api/pokemons");
        console.log("result axios", result);
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
