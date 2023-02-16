import axios from './config';
import { ICleanService } from '@/types';

export function getCleaningServices() {
	return axios.get(`/serv-cleaning`);
}

export function getCleanService(id: string) {
	return axios.get(`/serv-cleaning/${id}`);
}

export function createCleanService(cleanService: ICleanService) {
	return axios.post(`/serv-cleaning`, cleanService);
}

export function deleteCleanService(id: string) {
	return axios.delete(`/serv-cleaning/${id}`);
}
