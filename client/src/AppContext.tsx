import { createContext, SetStateAction, useContext, useState, ReactNode } from "react";


export type ContextTypeCustom = {
	currentTab: string;
	handleChange: (event: any, newValue: any, name: any) => void;
	handleClick: (event: any, name: any) => void;
} | null

const AppContext = createContext<ContextTypeCustom>(null);

export interface IChildren {
	children: any
}
export function TabContext({ children }: IChildren) {
	const [currentTab, setCurrentTab] = useState<string>("pokedex");

	const handleChange = (event: any, newValue: SetStateAction<string>, name: any) => {
		setCurrentTab(newValue);
	};

	const handleClick = (event: SetStateAction<string>, name: any) => {
		setCurrentTab(event);
	};

	return (
		<AppContext.Provider
			value={{
				currentTab,
				handleChange,
				handleClick,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useTabs(): ContextTypeCustom {
	return useContext(AppContext);
}
