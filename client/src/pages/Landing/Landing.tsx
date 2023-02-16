import { ReactElement } from 'react';
import Hero from '../../components/layout/Landing/Hero/Hero';

import Services from '../../components/layout/Landing/Services/Services';
import Reviews from '../../components/layout/Landing/Reviews';
import StartNow from './StartNow';
import HowWorks from './HowWorks';

function HomePage(): ReactElement {
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
