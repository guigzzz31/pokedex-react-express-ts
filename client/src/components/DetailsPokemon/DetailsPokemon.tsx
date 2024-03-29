import { Box, Button, useMediaQuery } from '@mui/material';
import { makeStyles } from "@mui/styles";

import { useParams } from 'react-router';

import { useReducer } from 'react';
import appReducer, { initialState } from '../../appReducer';
import useFetchPokemonDetails from '../../hooks/useFetchPokemonDetails';

import DamageGenerator from '../generators/DamageGenerator';
import GraphGenerator from '../generators/GraphGenerator';
import PokemonAvatar from '../helpers/PokemonAvatar';
import PokemonName from '../helpers/PokemonName';
import PokemonNumber from '../helpers/PokemonNumber';

import PokemonProps from '../../types/Pokemon';
import { ThemeCustom } from '../../theme';
import DetailsInfos from './DetailsInfos';
import TypeGenerator from '../generators/TypeGenerator';

import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export type RouteProps = {
	id: string
}

const useStyles = makeStyles((theme: ThemeCustom) => ({
	container: {
		position: "relative",
		display: "flex",
		justifyContent: "space-around",
		backgroundColor: theme.palette.primary.light,
		borderWidth: 1,
		borderRadius: 26,
		boxShadow: "20px 20px 60px #bd394e, -20px -20px 60px #ff4d6a",
		margin: "44px 16px 4px 16px",
		padding: "12px",
	},
	icon: {
		color: theme.palette.text.secondary,
	}
}));

const DetailsPokemon = () => {
	const classes = useStyles();

	const { id } = useParams<RouteProps>();
	const [state, dispatch] = useReducer(appReducer, initialState);
	useFetchPokemonDetails(dispatch, id)
	const matches700 = useMediaQuery('(max-width:700px)');
	const matches900 = useMediaQuery('(min-width:900px)');

	const { name, img, type, damages, stats, misc } = state?.pokemonDetails!;

	return (
		<Box pt={12}>
			<Box className={classes.container}>
				<Box sx={{ width: "100%" }}>
					{state && <Box
						sx={{
							display: "flex",
							flexDirection: !matches900 ? "column" : "row",
							justifyContent: !matches900 ? "center" : "space-evenly",
							flexWrap: !matches700 ? "wrap" : "nowrap",
							alignItems: "center",
							backgroundColor: "#ee7186",
							borderRadius: 6,
							padding: [2, 3, 4]
						}}
					>
						<Box>
							<PokemonAvatar img={img!} name={name!} isDetails />
						</Box>
						<Box>
							<Box sx={{ display: "flex", flexDirection: "column" }}>
								<Box mt={2}>
									<Box
										sx={{
											display: "flex",
											width: "70%",
											flexDirection: !matches900 ? "row" : "column",
											justifyContent: "space-between"
										}}
										my={2}
									>
										<PokemonNumber id={id!} isDetail />
										<PokemonName name={name!} isDetail />
									</Box>
								</Box>
								<Box>
									<Box my={2}>
										<TypeGenerator type={type!} isDetails />
									</Box>
									<Box my={2}>
										<DetailsInfos misc={misc!} />
									</Box>
								</Box>
							</Box>
						</Box>
						<Box ml='16px'>
							<GraphGenerator stats={stats!} />
						</Box>
						<Box my={2}>
							<DamageGenerator damages={damages!} />
						</Box>
					</Box>}
				</Box>
				<Link to="/">
					<Button
						id={id}
						sx={{
							position: "absolute",
							borderColor: "#FFF",
							top: !matches900 ? 8 : 12,
							right: !matches900 ? -6 : 0,
							padding: 0,
							margin: 0
						}}
					>
						<CloseIcon
							sx={{
								fontSize: !matches900 ? "28px" : "36px"
							}}
							className={classes.icon}
						/>
					</Button>
				</Link>
			</Box>
		</Box>
	)
}

export default DetailsPokemon