import ServicesCarousel from '@/components/organisms/ServicesCarousel';
import { ReactElement } from 'react';

function Services(): ReactElement {
	return (
		<section className=' text-center'>
			<h2 className=" sm:text-4xl text-3xl mb-4  text-gray-900 ">
				Servicios
			</h2>
			<ServicesCarousel />
		</section>
	);
}

export default Services;
