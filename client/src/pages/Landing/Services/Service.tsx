import { IService } from '@/types';

export const Service = ({ src, serviceType, description, alt }: IService) => {
	return (
		<article className="service-container">
			<img className="service-img h-[170px] md:h-[190px] xl:h-[230px] " src={src} alt={alt} />

			<div className='service-subcontainer h-[120px]'>
				<h4 className="service-title">{serviceType}</h4>
				<p className="service-description">{description}</p>
			</div>
		</article>
	);
};