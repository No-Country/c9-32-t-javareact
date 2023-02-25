import { ReactElement, useEffect } from 'react';

import Hero from './Hero';
import Services from './Services';
import Reviews from './Reviews';
import HowWorks from './HowWorks';
import FAQ from './FAQ';

function HomePage(): ReactElement {
	return (
		<>
		{/* <div className='h-screen w-screen absolute top-0 bg-gradient bg-no-repeat  '>

		</div> */}
			<Hero />
			<HowWorks />
			<Services />
			<Reviews />
			<FAQ />
		</>
	);
}

export default HomePage;
