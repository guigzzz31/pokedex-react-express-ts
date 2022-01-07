import React, { createContext, SetStateAction, useContext, useState, ReactNode, ReactChild } from "react";
import PokemonProps from "./types/Pokemon";


export type ContextTypeCustom = {
	currentTab: string,
	pokemons: PokemonProps[],
	likedPokemons: PokemonProps[],
	isLoading?: boolean,
	handleChange: (newValue: string) => void;
	handleClick: (event: any, name: any) => void;
}

export const AppContext = createContext<Partial<ContextTypeCustom>>({});

export interface IProps {
	children: ReactChild;
}

const Provider: React.FC<IProps> = (props: IProps) => {
	const [currentTab, setCurrentTab] = useState<string>("pokedex");
	const [pokemons, setPokemons] = useState<PokemonProps[]>([])
	const [likedPokemons, setLikedPokemons] = useState<PokemonProps[]>([])

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleChange = (newValue: string) => {
		setCurrentTab(newValue);
	};

	const handleClick = (event: SetStateAction<string>, name: string) => {
		setCurrentTab(event);
	};


	console.log("currenttab from context", currentTab)
	return (
		<AppContext.Provider
			value={{
				currentTab,
				isLoading,
				handleChange,
				handleClick,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
}

export default Provider;
