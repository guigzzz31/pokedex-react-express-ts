import { useReducer } from 'react';
import { useParams } from 'react-router';
import appReducer, { initialState } from '../../appReducer';
import useFetchPokemonDetails from '../../hooks/useFetchPokemonDetails';


export type RouteProps = {
	id: string
}

const DetailsPokemon = () => {
	const { id } = useParams<RouteProps>();
	const [state, dispatch] = useReducer(appReducer, initialState);
	useFetchPokemonDetails(dispatch, id)

	const { name, img, type, damages, stats, misc } = state.pokemonDetails;
	return (
		<>
			<p>{name}</p>
		</>
	)
}

export default DetailsPokemon