import { createContext, ReactElement, useContext, useState } from 'react';

import { IGlobalContext, IUser } from '@types';

type GlobalContextType = {
	userData: IUser | null;
	setUserData: React.Dispatch<React.SetStateAction<IUser>>;
};
const globalContextInitailState = {
	userData: null,
	setUserData: () => {},
};
const GlobalContext = createContext<GlobalContextType>(
	globalContextInitailState,
);

function useGlobalData() {
	const context = useContext(GlobalContext);
	return context;
}

function GlobalProvider({ children }: IGlobalContext): ReactElement {
	const [userData, setUserData] = useState<IUser>({
		id: '',
		name: '',
		email: '',
		address: '',
		phoneNumber: '',
		role: '',
		image: '',
		credentialsNonExpired: true,
	});

	return (
		<GlobalContext.Provider
			value={{
				userData,
				setUserData,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}

export { GlobalProvider, useGlobalData, GlobalContext };
