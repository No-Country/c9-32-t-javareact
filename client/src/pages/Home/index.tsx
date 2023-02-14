import { ReactElement } from 'react';
import Hero from './Hero';

import Services from './Services';
import Reviews from './reviews';

function HomePage(): ReactElement {
	return (
		<>
			<Hero />
			<Services />
			<Reviews />
		</>
	);
}

export default HomePage;
