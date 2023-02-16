import { IService } from '@/types';

export const Service = ({ src, serviceType, description, alt }: IService) => {
	return (
		<article className="service-container">
			<img className="service-img" src={src} alt={alt} />

			<div className='service-subcontainer'>
				<h4 className="service-title">{serviceType}</h4>
				<p className="service-description">{description}</p>
			</div>
		</article>
	);
};
