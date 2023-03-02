import { IUser } from '@/types';

const postUser = async (user: IUser) => {
	const newUser = {
		id: user.id,
		//"password": user.password,
		name: user.name,
		email: user.email,
		address: user.address,
		phoneNumber: user.phoneNumber,
	};

	const response = await fetch(
		'https://c9-32-t-javareact-production.up.railway.app/api/v1/users',
		{
			method: 'POST',
			body: JSON.stringify(newUser),
			mode: 'no-cors',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-type': 'application/json',
			},
		},
	);
	console.log(response);

	return response;
};
export default postUser;
