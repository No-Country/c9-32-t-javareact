import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useGlobalData } from '@context/GlobalContext';

function UserLayout() {
	const { fetchUserData } = useGlobalData();
	useEffect(() => {
		fetchUserData();
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
