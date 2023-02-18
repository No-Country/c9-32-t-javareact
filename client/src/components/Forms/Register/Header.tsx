import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/logo-white.png';

function Header() {
	return (
		<header>
			<nav className="py-4 bg-royalBlue-500 h-[56px] flex items-center justify-center">
				<Link
					to="/"
					title="home"
					className="flex justify-center items-center gap-4 text-white"
				>
					<h1 className="text-3xl sm:text-4xl font-bold">
						DustBusters
					</h1>
					<img src={logo} className="w-8" />
				</Link>
			</nav>
		</header>
	);
}

export default Header;
