import axios from './config';
import { ICleanService } from '@/types';

export function getUserSchedule(id: string | undefined) {
	return axios.get(`/serv-schedule/${id}`);
}

export function createUserSchedule(data: object) {
	return axios.post(`/serv-schedule`, data);
}

export function deleteServiceType(id: string) {
	return axios.delete(`/serv-schedule/${id}`);
}
