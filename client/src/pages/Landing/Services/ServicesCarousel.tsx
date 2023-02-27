import { Service } from './Service';
import data from '../../../utils/data.json';
import { IService } from '@/types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ServicesCarousel = () => {
	const services = data.services;
	

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<Carousel
			responsive={responsive}
			className="relative rounded-xl    pt-[10px]  "
		>
			
				{services.map((service: IService, i) => {
					return (
						
							<Service
								src={service.src}
								serviceType={service.serviceType}
								description={service.description}
								alt={service.alt}
								key={service.serviceType}
							/>
						
					);
				})}
		
		
		</Carousel>
	);
};
export default ServicesCarousel;
