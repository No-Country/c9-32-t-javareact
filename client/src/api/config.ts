import axios, { AxiosInstance } from 'axios';
import { AuthVerify, getToken } from '@api/auth';

// swagger https://jealous-flavor-production.up.railway.app/swagger-ui/index.html
const BASE_URL = 'https://jealous-flavor-production.up.railway.app/api/v1';

export const axiosInstance: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		console.log('token Valido->', AuthVerify());
		if (AuthVerify()) {
			const token = getToken();
			/* axiosInstance.defaults.headers.common[
				'Authorization'
			] = `Bearer ${token}`; */
			//config.headers['Authorization'] = `Bearer ${token}`;
			return config;
		}
		config.headers['Authorization'] = null;
		return config;
	},
	(error) => {
		console.log('Interceptor de peticion Axios error', error);
		return Promise.reject(error);
	},
);
axiosInstance.interceptors.response.use(
	(response) => {

		return response;
	},
	(error) => {
		if (error && error.response.status === 401) {
			console.log('Error 401 falta autenticación');
			alert('401 falta autenticación');

			window.location.replace('/login');
			return Promise.reject(error);
		}
		if (error && error.response.status === 403) {
			console.log('Error 403 No autorizado');
			alert('403  No autorizado');
			window.location.replace('/login');
			return Promise.reject(error);
		}
		if (error && error.response.status === 404) {
			console.log('Recurso no encontrado');
			/* alert('404 Recurso no encontrado'); */
			return Promise.reject(error);
		}
		console.log(error.response);
		return Promise.reject(error);
	},
);

export default axiosInstance;
