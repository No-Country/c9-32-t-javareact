import { Outlet } from 'react-router-dom';
import Header from './Header';

function UserLayout() {
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
