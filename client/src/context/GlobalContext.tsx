import { createContext, ReactElement, useContext, useState } from 'react';

import { IGlobalContext, IUser } from '@types';

type GlobalContextType = {
	userData: IUser | null;
	setUserData: React.Dispatch<React.SetStateAction<IUser>>;
	userImg: { url: string; file: any } | undefined;
	setUserImg: React.Dispatch<
		React.SetStateAction<{ url: string; file: any }>
	>;
	deleteUserData: () => void;
};
const globalContextInitailState = {
	userData: null,
	setUserData: () => {},
	deleteUserData: () => {},
	userImg: { url: '', file: null },
	setUserImg: () => {},
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
	const [userImg, setUserImg] = useState({ url: '', file: null });

	const deleteUserData = () => {
		setUserData({
			id: '',
			name: '',
			email: '',
			address: '',
			phoneNumber: '',
			role: '',
			image: '',
			credentialsNonExpired: true,
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				userData,
				setUserData,
				userImg,
				setUserImg,
				deleteUserData,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}

export { GlobalProvider, useGlobalData, GlobalContext };
