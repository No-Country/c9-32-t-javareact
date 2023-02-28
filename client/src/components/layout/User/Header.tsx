import Bars from '@/components/icons/Bars';
import { Close } from '@/components/icons/Close';
import { Button } from '@/components/shared/Button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { useGlobalData } from '@context/GlobalContext';
import { deleteToken } from '@/api/auth';
import Location from '@/components/icons/Location';
import SearchBar from '@/components/shared/SearchBar';

const Nav = () => {
	const navigate = useNavigate();
	const [showNav, setShowNav] = useState<boolean>(false);
	const { userData, userImg, deleteUserData } = useGlobalData();

	const navItems = [
		'132 Joe St Apt 3 Stockton CA 20500',
		'¿Qué servicio necesitas?',
	];

	const isSmall = useMediaQuery('(min-width: 768px)');

	useEffect(() => {
		showNav
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'scroll');
	}, [showNav]);

	const variants = !isSmall && {
		open: { opeacity: 0, x: 0 },
		closed: { opacity: 0, x: '100%' },
	};
	const variantList = !isSmall && {
		open: { opeacity: 0, y: 0 },
		closed: { opacity: 100, y: 0 },
		hovering: {
			scale: 1.2,
			transition: { delay: 0.1, duration: 0.2 },
		},
	};

	const logout = () => {
		deleteUserData();
		deleteToken();
		navigate('/');
	};

	return (
		<header className=" relative w-limited  flex items-center  justify-center  nav-container">
			<div className="container flex  justify-center items-center  md:pt-2">
				<Link
					to={'/home'}
					className="text-white md:text-customViolet h-[56px] flex items-center text-xl mr-5 md:mr-0 font-extrabold  "
				>
					DustBusters
				</Link>
				<motion.nav
					animate={showNav ? 'open' : 'closed'}
					variants={variants || undefined}
					transition={{ duration: 0.5 }}
					className="flex flex-col justify-center items-center lg:flex-row  nav-container"
				>
					<motion.div
						className="nav-list_container "
						animate={showNav ? 'open' : 'closed'}
						variants={variantList || undefined}
						transition={{ delay: 0.4, duration: 0.4 }}
					>
						<ul className="nav-list md:ml-4  w-full">
							<motion.li
								onClick={() => setShowNav(false)}
								className="flex justify-center items-center gap-2  "
							>
								<Location />
								<div className=" nav_link-item hover:scale-100">
									{navItems[0]}
								</div>
							</motion.li>
						</ul>
						<div className="flex gap-2  justify-end items-center ">
							{/* <span className="text-md">{userData?.name}</span> */}
							<div className=" flex justify-center items-center w-10 h-10">
								<i className="material-icons-outlined text-customViolet  ">
									notifications
								</i>
							</div>
							<Link
								to="/profile"
								className="bg-royalBlue rounded-full  w-12 h-12 overflow-hidden"
							>
								<img
									src={
										userImg?.url ||
										'https://via.placeholder.com/150'
									}
									alt="user Img"
									className="w-full h-full object-cover"
								/>
							</Link>
							{/* <button
								className="flex justify-center items-center text-sm"
								title="cerrar sesión"
								onClick={logout}
							>
								<i className="material-icons-outlined  mr-0">
									logout
								</i>
								Salir
							</button> */}
						</div>
					</motion.div>
				</motion.nav>
				<motion.button
					className="toggleButton"
					onClick={() => setShowNav((show: boolean) => !show)}
					whileHover={{ scale: 1 }}
					whileTap={{ scale: 0.9 }}
				>
					{showNav ? <Close /> : <Bars />}
				</motion.button>
			</div>
		</header>
	);
};

export default Nav;
