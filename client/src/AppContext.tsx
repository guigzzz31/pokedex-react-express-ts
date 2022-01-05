import React, { createContext, SetStateAction, useContext, useState, ReactNode, ReactChild } from "react";


export type ContextTypeCustom = {
	currentTab: string;
	handleChange: (event: any, newValue: any, name: any) => void;
	handleClick: (event: any, name: any) => void;
}

const initialContext = {
	currentTab: "pokedex",
	handleChange: () => { },
	handleClick: () => { }
}

export const TabContext = createContext<Partial<ContextTypeCustom>>({});

export interface IProps {
	children: ReactChild;
}

const TabProvider: React.FC<IProps> = (props: IProps) => {
	const [currentTab, setCurrentTab] = useState<string>("pokedex");

	const handleChange = (event: any, newValue: SetStateAction<string>, name: any) => {
		setCurrentTab(newValue);
	};

	const handleClick = (event: SetStateAction<string>, name: any) => {
		setCurrentTab(event);
	};

	return (
		<TabContext.Provider
			value={{
				currentTab,
				handleChange,
				handleClick,
			}}
		>
			{props.children}
		</TabContext.Provider>
	);
}

export default TabProvider;

// export function useTabs() {
// 	return useContext(AppContext);
// }
