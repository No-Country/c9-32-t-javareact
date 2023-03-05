import axios from 'axios';

export function getUserLocationName(lat: number, lon: number) {
	console.log(lat, lon);
	return axios.get(
		`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyCQCfPcjSdpbzIMwVhbyZPp_iVD1yX8o8w`,
	);
}

export function getUserGeo(): any {
	console.log('geo');
	return new Promise((res, rej) => {
		navigator.geolocation.getCurrentPosition(res, rej);
	});
}

export async function getUserLocation() {
	const position = await getUserGeo();
	console.log(position);
	return getUserLocationName(
		position.coords.latitude,
		position.coords.longitude,
	);
}
