import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

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
