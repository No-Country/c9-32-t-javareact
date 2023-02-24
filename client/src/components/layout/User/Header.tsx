import Bars from '@/components/icons/Bars';
import { Close } from '@/components/icons/Close';
import { Button } from '@/components/shared/Button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@hooks/useMediaQuery';

const Nav = () => {
	const navigate = useNavigate();
	const [showNav, setShowNav] = useState<boolean>(false);

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

	return (
		<header className=" relative w-limited  flex items-center  justify-center  nav-container">
			<div className="container flex  justify-center items-center gap-16">
				<Link
					to={'/'}
					className="text-white md:text-black h-[56px] flex items-center text-xl mr-5 md:mr-0 font-extrabold  "
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
						<ul className="nav-list">
							{navItems.map((item: string, i) => {
								return (
									<motion.li
										onClick={() => setShowNav(false)}
										key={i}
									>
										<Link
											className=" nav_link-item"
											to={`/#${item}`}
										>
											{item}
										</Link>
									</motion.li>
								);
							})}
						</ul>
						<div className="flex gap-5 w-full justify-end ">
							<div className=" flex justify-center items-center w-10 h-10">
								<i className="material-icons-outlined  ">
									notifications
								</i>
							</div>
							<div className="bg-royalBlue rounded-full flex justify-center items-center w-9 h-9">
								<i className="material-icons text-white">
									person
								</i>
							</div>
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
