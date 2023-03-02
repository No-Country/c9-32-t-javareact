import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useGlobalData } from '@context/GlobalContext';

function UserLayout() {
	const { fetchUserData, fetchServTypes, userData } = useGlobalData();
	useEffect(() => {
		fetchUserData();
		fetchServTypes();
	}, []);

	return (
		<>
			<Header />
			<main className="flex-auto  container">
				{userData?.id ? <Outlet /> : <div className="lds-dual-ring " />}
			</main>
		</>
	);
}

export default UserLayout;
