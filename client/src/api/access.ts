import axios from './config';
import { AxiosResponse } from 'axios';
import { IUser } from '@/types';
import { deleteToken, setToken } from './auth';

interface loginPayload {
	email: string;
	password: string;
}
export async function loginUser(payload: loginPayload) {
	const response = await axios.post(`/auth/authenticate`, payload);
	console.log(response);
	if (response.status === 200) {
		setToken(response.data.token);
	}
	return response.data;
}

export async function signInUser(user: any) {
	return axios.post(`/auth/register`, user).then((response) => {
		console.log(response);
		if (response.status === 200) {
			setToken(response.data.token);
		}
		return response.data;
	});
}
export function logoutUser() {
	deleteToken();
}
