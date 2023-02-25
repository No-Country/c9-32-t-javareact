import { IGlobalContext } from '@types';

import { GlobalContext } from './GlobalContext';

export const GlobalProvider: React.FC<IGlobalContext> = ({ children }) => {
	return (
		<GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
	);
};
