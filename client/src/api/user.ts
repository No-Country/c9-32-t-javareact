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
export function updateUser({ id, user }: { id: string; user: IUser }) {
	return axios.put(`/users/${id}`, user);
}

export function deleteUser(id: string) {
	return axios.delete(`/users/${id}`);
}

export function getMyUserData() {
	const data = decodeToken();
	return getUser(data?.userId || '');
}

export function updateUserImage({ img, id }: any) {
	console.log(img, id);
	const formData = new FormData();
	formData.append('file', img);
	return axios.post(`/users/upload-image/${id}`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
}

export function getUserImage(id: string) {
	return axios
		.get(`/users/images/${id}`, {
			responseType: 'blob',
		})
		.then((response) => {
			console.log(response);
			if (response.data.size > 0) {
				return {
					url: URL.createObjectURL(response.data),
					file: response.data,
				};
			}
			return { url: '', file: '' };
		});
}
