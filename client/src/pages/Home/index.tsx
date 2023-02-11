import React from 'react';
import { ReactElement } from 'react';
import Hero from './Hero';

import Services from './Services';



function HomePage(): ReactElement {
	return (
		<>
			<Hero />
			<Services />
		</>
	);
}

export default HomePage;
