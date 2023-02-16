
import ServicesCarousel from '@/components/layout/Landing/Services/ServicesCarousel';
import { ReactElement } from 'react';

function Services(): ReactElement {
	return (
		<section>
			<h2 className="heading2 text-center">Servicios</h2>
			<ServicesCarousel />
		</section>
	);
}

export default Services;
