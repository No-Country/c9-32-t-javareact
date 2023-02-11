import { ReactElement } from 'react';
import { Services, Hero } from './components';

function HomePage(): ReactElement {
	return (
		<>
			<Hero />
			<Services />
		</>
	);
}

export default HomePage;
