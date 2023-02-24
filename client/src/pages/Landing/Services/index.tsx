import ServicesCarousel from './ServicesCarousel';
import { ReactElement } from 'react';

function Services(): ReactElement {
	return (
		<section className="mt-10" id="services">
			<h2 className="heading2 text-center mb-10">Servicios</h2>
			<ServicesCarousel />
		</section>
	);
}

export default Services;
