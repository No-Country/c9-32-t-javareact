import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function LandingLayout(): ReactElement {
	return (
		<>
			<Header />
			<main className="flex-auto container">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default LandingLayout;
