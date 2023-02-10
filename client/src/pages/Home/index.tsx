import { ReactElement } from 'react';
import { Services, Hero } from './components';

function HomePage(): ReactElement {
	return (
		<main className="flex-auto max-w-7xl mx-auto">
			<Hero />
			<Services />
		</main>
	);
}

export default HomePage;
