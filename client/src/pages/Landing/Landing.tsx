import { ReactElement, useEffect } from 'react';

import Hero from '@components/layout/Landing/Hero/Hero';

import Services from './Services';
import Reviews from './Reviews';
import StartNow from './StartNow';
import HowWorks from './HowWorks';

import { getUsers } from '@/api/user';

function HomePage(): ReactElement {
	/* useEffect(() => {
		(async () => {
			try {
				const response = await getUsers();
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []); */

	return (
		<>
			<Hero />
			<HowWorks />
			<Services />
			<Reviews />
			<StartNow />
		</>
	);
}

export default HomePage;
