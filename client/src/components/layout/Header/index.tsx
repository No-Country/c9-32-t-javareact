import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Close } from '../../icons/Close';
import Bars from '../../icons/Bars';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const Nav = () => {
	const [showNav, setShowNav] = useState<boolean>(false);

	const navItems = ['lorem', 'lorem', 'lorem', 'lorem'];

	const isSmall = useMediaQuery('(min-width: 1024px)');
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
		closed: { opacity: -100, y: 0 },
		hovering: {
			scale: 1.2,
			transition: { delay: 0.1, duration: 0.2 },
		},
	};
	return (
		<div className="relative w-limited  ">
			<motion.nav
				animate={showNav ? 'open' : 'closed'}
				variants={variants || undefined}
				transition={{ duration: 0.5 }}
				className="flex  bg-bgColor flex-col justify-center items-center lg:flex-row "
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
									<a className=" nav_link-item" href="#">
										{item}
									</a>
								</motion.li>
							);
						})}
					</ul>
				</motion.div>
			</motion.nav>
			<motion.button
				className="toggleButton"
				onClick={() => setShowNav((show: boolean) => !show)}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				{showNav ? <Close /> : <Bars />}
			</motion.button>
		</div>
	);
};

export default Nav;
