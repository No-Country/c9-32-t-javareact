import axios from 'axios';

// swagger https://c9-32-t-javareact-production.up.railway.app/swagger-ui/index.html
const BASE_URL = 'https://c9-32-t-javareact-production.up.railway.app/api/v1';

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});

export default axiosInstance;
