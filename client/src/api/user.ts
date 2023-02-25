import axios from './config';
import { AxiosResponse } from 'axios';
import { IUser } from '@/types';
import { decodeToken } from '@api/auth';

export function getUsers(): Promise<AxiosResponse<IUser[]>> {
	return axios.get(`/users`);
}

export function getUser(id: string): Promise<AxiosResponse<IUser>> {
	return axios.get(`/users/${id}`);
}

export function createUser(user: IUser) {
	return axios.post(`/users`, user);
}

export function deleteUser(id: string) {
	return axios.delete(`/users/${id}`);
}

export function getMyUserData() {
	const data = decodeToken();
	return getUser(data?.userId || '');
}
