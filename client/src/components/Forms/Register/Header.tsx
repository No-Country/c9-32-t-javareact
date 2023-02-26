import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/logo-white.png';

function Header() {
	return (
		<header>
			<nav className="py-4 bg-royalBlue-500 flex items-center justify-center md:bg-transparent ">
				<Link
					to="/"
					title="home"
					className="flex justify-center items-center gap-4 text-customViolet"
				>
					<h1 className="text-xl sm:text-xl font-extrabold md:text-2xl xl:text-3xl hidden md:inline">
						DustBusters
					</h1>
					<img src={logo} className="w-8 md:hidden" />
				</Link>
			</nav>
		</header>
	);
}

export default Header;
