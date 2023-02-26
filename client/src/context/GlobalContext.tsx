import { createContext, ReactElement, useContext, useState } from 'react';

import { IGlobalContext, IUser } from '@types';
import { getMyUserData, getUserImage } from '@/api/user';
import { AuthVerify } from '@/api/auth';

type GlobalContextType = {
	userData: IUser | null;
	setUserData: React.Dispatch<React.SetStateAction<IUser>>;
	userImg: { url: string; file: any } | undefined;
	setUserImg: React.Dispatch<
		React.SetStateAction<{ url: string; file: any }>
	>;
	deleteUserData: () => void;
	fetchUserData: () => void;
};
const globalContextInitailState = {
	userData: null,
	setUserData: () => {},
	deleteUserData: () => {},
	userImg: { url: '', file: null },
	setUserImg: () => {},
	fetchUserData: () => {},
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
		setUserImg({ url: '', file: null });
	};
	const fetchUserData = async () => {
		try {
			console.log('token Valido->', AuthVerify());
			const response = await getMyUserData();
			setUserData(response.data);
			const userImg = await getUserImage(response.data.id);
			setUserImg(userImg);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<GlobalContext.Provider
			value={{
				userData,
				setUserData,
				userImg,
				setUserImg,
				deleteUserData,
				fetchUserData,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}

export { GlobalProvider, useGlobalData, GlobalContext };
