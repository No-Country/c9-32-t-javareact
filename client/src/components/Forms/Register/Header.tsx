import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/logo-white.png';

function Header() {
	return (
		<header>
			<nav className="py-4 bg-royalBlue-500 flex items-center justify-center">
				<Link
					to="/"
					title="home"
					className="flex justify-center items-center gap-4 text-white"
				>
					<h1 className="text-xl sm:text-xl font-extrabold">
						DustBusters
					</h1>
					<img src={logo} className="w-8" />
				</Link>
			</nav>
		</header>
	);
}

export default Header;
