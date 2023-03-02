export interface IGlobalContext {
	children: JSX.Element | JSX.Element[];
}

export interface IUser {
	id: string;
	name: string;
	email: string;
	address: string;
	phoneNumber: string;
	role: string;
	image: string;
	credentialsNonExpired: boolean;
}

export interface ICleanService {
	id: string;
	serviceType: string;
	freeTime: Date;
	address: string;
	price: number;
	state: string;
}

export interface IEmployee {
	id: string;
	name: string;
	email: string;
	password: string;
	address: string;
	isaVailable: string;
}

export interface IButton {
	text: string;
	customClass: string;
	to: string;
}

export interface IService {
	src: string;
	serviceType: string;
	description: string;
	alt: string;
}
export interface GlobalContextType {
	userData: IUser | null;
	setUserData: React.Dispatch<React.SetStateAction<IUser>>;
	userImg: { url: string; file: any } | undefined;
	setUserImg: React.Dispatch<
		React.SetStateAction<{ url: string; file: any }>
	>;
	deleteUserData: () => void;
	fetchUserData: () => void;
	userLocation: string;
	setUserLocation: React.Dispatch<React.SetStateAction<string>>;
	servTypes: object[];
	fetchServTypes: () => void;
	
}

