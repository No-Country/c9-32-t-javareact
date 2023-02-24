import jwtDecode from 'jwt-decode';

export const TOKEN_KEY = 'DUSTBUSTERS-TOKEN-SESSION';

export function setToken(token: string) {
	localStorage.setItem(TOKEN_KEY, token);
}
export function getToken(): string {
	return localStorage.getItem(TOKEN_KEY) || '';
}
export function deleteToken() {
	localStorage.removeItem(TOKEN_KEY);
}
interface tokenPayload {
	sub: string;
	iat: number;
	exp: number;
}
export function decodeToken(): tokenPayload {
	return jwtDecode(getToken());
}

export function userSessionTime() {
	const userData = decodeToken();
	const date = new Date(userData.exp * 1000);
	return date;
}
