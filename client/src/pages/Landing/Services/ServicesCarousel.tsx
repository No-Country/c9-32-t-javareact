import { Service } from './Service';
import data from '../../../utils/data.json';
import { IService } from '@/types';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowLeft from '@components/icons/ArrowLeft';
import ArrowRight from '@components/icons/ArrowRight';
import { useEffect, useState } from 'react';

const ServicesCarousel = () => {
	const services = data.services;
	const [slidesCant, setSlidesCant] = useState(1.1);
	

	useEffect(() => {
		window.innerWidth > 400 && setSlidesCant(2);
		window.innerWidth > 768 && setSlidesCant(3);
		window.innerWidth > 1024 && setSlidesCant(4);
		window.innerWidth > 1280 && setSlidesCant(5);

	}, [window.innerWidth]);

	return (
		<CarouselProvider
		
			naturalSlideWidth={100}
			naturalSlideHeight={145}
			totalSlides={services.length}
			visibleSlides={slidesCant}
			className="relative rounded-xl  pt-[10px] tablet:px-4 "
		>
			<Slider className="">
				{services.map((service: IService, i) => {
					return (
						<Slide index={i} key={i}>
							{' '}
							<Service
								src={service.src}
								serviceType={service.serviceType}
								description={service.description}
								alt={service.alt}
							/>
						</Slide>
					);
				})}
			</Slider>
			<ButtonBack
				className="slider-arrow  left-0 tablet:-left-3 "
				children={<ArrowLeft />}
			/>
			<ButtonNext
				
				className={` slider-arrow right-0 tablet:-right-3 `}
				children={<ArrowRight />}
			/>
		</CarouselProvider>
	);
};
export default ServicesCarousel;
