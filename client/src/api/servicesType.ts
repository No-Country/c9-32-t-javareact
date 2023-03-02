import axios from './config';
import { ICleanService } from '@/types';

export function getServicesTypes() {
	return axios.get(`/serv-type`);
}

export function getServiceType(id: string) {
	return axios.get(`/serv-type/${id}`);
}

export function createServiceType(cleanService: ICleanService) {
	return axios.post(`/serv-type`, cleanService);
}

export function deleteServiceType(id: string) {
	return axios.delete(`/serv-type/${id}`);
}
