import { ReactElement, useEffect } from 'react';

import Hero from '@components/layout/Landing/Hero/Hero';

import Services from './Services';
import Reviews from './Reviews';
import HowWorks from './HowWorks';
import FAQ from './FAQ';

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
			<FAQ />
		</>
	);
}

export default HomePage;
