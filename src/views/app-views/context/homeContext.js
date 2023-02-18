import { createContext, useContext, useState } from "react";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
	const [filter, setFilter] = useState({ countryCode: "UZ" });
	const value = { filter, setFilter };

	return (
		<HomeContext.Provider value={value}>{children}</HomeContext.Provider>
	);
};

const useFilter = () => {
	const { filter, setFilter } = useContext(HomeContext);
	return [filter, setFilter];
};

export { HomeProvider, useFilter };
