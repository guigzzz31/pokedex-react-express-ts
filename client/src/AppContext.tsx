import React, { createContext, SetStateAction, useContext, useState, ReactNode, ReactChild } from "react";


export type ContextTypeCustom = {
	currentTab: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>, newValue: SetStateAction<string>, name: string) => void;
	handleClick: (event: any, name: any) => void;
}

export const TabContext = createContext<Partial<ContextTypeCustom>>({});

export interface IProps {
	children: ReactChild;
}

const TabProvider: React.FC<IProps> = (props: IProps) => {
	const [currentTab, setCurrentTab] = useState<string>("pokedex");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: SetStateAction<string>, name: string) => {
		setCurrentTab(newValue);
	};

	const handleClick = (event: SetStateAction<string>, name: string) => {
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
