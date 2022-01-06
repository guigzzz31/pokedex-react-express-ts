import React, { useEffect } from "react";
import axios from "axios";
import { TInitialState } from "../appReducer";

const useFetchPokemonDetails = (dispatch: React.Dispatch<Partial<TInitialState>>, id: string) => {
	useEffect(() => {
		const fetchPokemon = async () => {
			dispatch({
				type: "START_LOADING",
				isLoading: true
			})
			try {
				const result = await axios(`/api/pokemon/${id}`);
				dispatch({
					type: "POKEMON_DETAILS_FETCH_SUCCESS",
					pokemonDetails: result.data.result,
				});
				console.log("result", result)
			} catch (error) {
				console.log(error);
			}
		};
		fetchPokemon();
	}, [dispatch, id]);
};

export default useFetchPokemonDetails;
