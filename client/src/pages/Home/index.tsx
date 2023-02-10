import React from 'react';
import { Services } from './components';
import Hero from './components/Hero';

function HomePage() {
	return (
		<main className="flex-auto max-w-7xl mx-auto">
			<Hero />
			<Services />
		</main>
	);
}

export default HomePage;
