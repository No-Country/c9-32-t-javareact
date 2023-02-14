import ServicesCarousel from '@/components/organisms/ServicesCarousel';
import { ReactElement } from 'react';

function Services(): ReactElement {
	return (
		<section>
			<h2 className=" sm:text-4xl text-3xl mb-4  text-gray-900 ">
				The Services we provide for
				<span className=" text-blue-600 font-semibold">
					{' '}
					our customers
				</span>
			</h2>
			<ServicesCarousel/>
		</section>
	);
}

export default Services;
