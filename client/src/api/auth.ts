import jwtDecode from 'jwt-decode';

export const TOKEN_KEY = 'DUSTBUSTERS-TOKEN-SESSION';

export function setToken(token: string) {
	localStorage.setItem(TOKEN_KEY, token);
}
export function getToken(): string | null {
	return localStorage.getItem(TOKEN_KEY) || null;
}
export function deleteToken() {
	localStorage.removeItem(TOKEN_KEY);
}
interface tokenPayload {
	sub: string;
	userId: string;
	iat: number;
	exp: number;
}
export function decodeToken(): tokenPayload | null {
	const token = getToken();
	if (token) {
		return jwtDecode(token);
	}
	return null;
}

export function userSessionTime() {
	const userData = decodeToken();
	const date = userData && new Date(userData.exp * 1000);
	return date;
}
export function AuthVerify(): boolean {
	const data = decodeToken();
	return data !== null && data?.exp * 1000 > Date.now();
}
