import { ReactElement, useEffect } from 'react';

import Hero from './Hero';
import Services from './Services';
import Reviews from './Reviews';
import HowWorks from './HowWorks';
import FAQ from './FAQ';

function HomePage(): ReactElement {
	return (
		<>
			<Hero />
			<HowWorks />
			<Services />
			<FAQ />
		</>
	);
}

export default HomePage;
