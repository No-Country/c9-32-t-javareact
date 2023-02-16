import { ReactElement } from 'react';
import Hero from '../../components/layout/Landing/Hero/Hero';


import Services from '../../components/layout/Landing/Services/Services';
import Reviews from '../../components/layout/Landing/Reviews';
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
