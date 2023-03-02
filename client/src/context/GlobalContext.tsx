import { createContext, ReactElement, useContext, useState } from 'react';

import { IGlobalContext, IUser, GlobalContextType } from '@types';
import { getMyUserData, getUserImage } from '@/api/user';
import { AuthVerify } from '@/api/auth';
import { getServicesTypes } from '@/api/servicesType';

const globalContextInitialState = {
	userData: null,
	setUserData: () => {},
	deleteUserData: () => {},
	userImg: { url: '', file: null },
	setUserImg: () => {},
	fetchUserData: () => {},
	userLocation: '',
	setUserLocation: () => {},
	servTypes: [],
	fetchServTypes: () => {},
};
const GlobalContext = createContext<GlobalContextType>(
	globalContextInitialState,
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
	const [userLocation, setUserLocation] = useState('');
	const [servTypes, setServType] = useState([]);

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
			const response = await getMyUserData();
			console.log(response);
			setUserData(response.data);
			const userImg = await getUserImage(response.data.id);
			setUserImg(userImg);
		} catch (error) {
			console.log(error);
		}
	};
	const fetchServTypes = async () => {
		const response = await getServicesTypes();
		setServType(response.data);

		try {
		} catch (error: any) {
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
				userLocation,
				setUserLocation,
				servTypes,
				fetchServTypes,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}

export { GlobalProvider, useGlobalData, GlobalContext };
