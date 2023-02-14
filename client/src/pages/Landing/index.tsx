import { ReactElement } from 'react';
import Hero from './Hero';
import axios from 'axios';

import Services from './Services';
import Reviews from './reviews';
import StartNow from './StartNow';

function HomePage(): ReactElement {
	return (
		<>
			<Hero />
			<h2 className="heading2">¿Cómo funciona?</h2>
			<Services />
			<Reviews />
			<StartNow />
			<h2 className="heading2 text-center ">
				Con
				<span className=" text-royalBlue font-semibold mx-2">
					DustBusters
				</span>
				enfócate en lo importante
			</h2>
		</>
	);
}

export default HomePage;
