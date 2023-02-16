import { ReactElement } from 'react';
import Hero from './Hero';


import Services from '../../components/layout/Landing/Services/Services';
import Reviews from './reviews';
import StartNow from './StartNow';

function HomePage(): ReactElement {
	return (
		<>
			<Hero />
			<Services />
			<Reviews />
			<StartNow />
			
		</>
	);
}

export default HomePage;
