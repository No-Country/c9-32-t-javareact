import axios from './config';
import { AxiosResponse } from 'axios';
import { IUser } from '@/types';

export function getUsers(): Promise<AxiosResponse<{ data: IUser[] }>> {
	return axios.get(`/users`);
}

export function getUser(id: string) {
	return axios.get(`/users/${id}`);
}

export function createUser(user: IUser) {
	return axios.post(`/users`, user);
}

export function deleteUser(id: string) {
	return axios.delete(`/users/${id}`);
}
