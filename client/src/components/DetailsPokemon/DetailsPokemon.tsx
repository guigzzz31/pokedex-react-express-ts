import { Box, useMediaQuery } from '@mui/material';
import { useReducer } from 'react';
import { useParams } from 'react-router';
import appReducer, { initialState } from '../../appReducer';
import useFetchPokemonDetails from '../../hooks/useFetchPokemonDetails';
import PokemonProps from '../../types/Pokemon';
import DamageGenerator from '../generators/DamageGenerator';
import GraphGenerator from '../generators/GraphGenerator';
import InfoModale from '../ModalPokemon/InfoModale';
import PokemonAvatarModale from '../ModalPokemon/PokemonAvatarModale';
import PokemonNameModale from '../ModalPokemon/PokemonNameModale';
import PokemonNumberModale from '../ModalPokemon/PokemonNumberModale';
import TypeGenModale from '../ModalPokemon/TypeGenModale';


export type RouteProps = {
	id: string
}

const DetailsPokemon = () => {
	const { id } = useParams<RouteProps>();
	const [state, dispatch] = useReducer(appReducer, initialState);
	useFetchPokemonDetails(dispatch, id)
	const matches = useMediaQuery('(min-width:700px)');

	// const { pokemonDetails } = state
	const { name, img, type, damages, stats, misc } = state?.pokemonDetails!;

	// console.log("daamages", stats)

	return (
		<Box>
			{state && <Box
				sx={{
					display: "flex",
					flexDirection: !matches ? "column" : "row",
					justifyContent: "space-evenly",
					alignItems: "center",
					backgroundColor: "#ee7186",
					borderRadius: 6,
					//width: '100%',
					margin: 2,
					padding: [2, 3, 4]
				}}
			>
				<Box>
					<PokemonAvatarModale img={img!} />
				</Box>
				<Box>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<Box>
							<Box mb={1}>
								<Box>
									<Box>
										<PokemonNumberModale id={id!} />
									</Box>
									<Box>
										<PokemonNameModale name={name!} />
									</Box>
								</Box>
							</Box>
						</Box>
						<Box>
							<TypeGenModale type={type!} />
							<InfoModale misc={misc!} />
						</Box>
					</Box>
				</Box>
				<Box>
					<GraphGenerator stats={stats!} />
				</Box>
				<Box>
					<DamageGenerator damages={damages!} />
				</Box>
			</Box>}
		</Box>
	)
}

export default DetailsPokemon