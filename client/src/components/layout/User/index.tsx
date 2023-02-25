import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { getMyUserData } from '@api/user';
import { useGlobalData } from '@context/GlobalContext';

function UserLayout() {
	const { setUserData } = useGlobalData();
	useEffect(() => {
		(async () => {
			try {
				const response = await getMyUserData();
				console.log(response);
				setUserData(response.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<>
			<Header />
			<main className="flex-auto  container">
				<Outlet />
			</main>
		</>
	);
}

export default UserLayout;
