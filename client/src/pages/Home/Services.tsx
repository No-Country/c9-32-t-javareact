import { useNavigate } from 'react-router-dom';
import data from '@/utils/data.json';
import { IService } from '@/types';

function Services() {
	const services = data.services;

	return (
		<section className="my-6" id="orders">
			<h3 className="heading3 ">Nuestros servicios</h3>
			<p>Selecciona el servicio que quieras solicitar</p>
			<div className="mt-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
					{services.map((service: IService) => {
						return (
							<ServiceCard
								key={service.serviceType}
								serviceData={service}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

function ServiceCard({ serviceData }: { serviceData: IService }) {
	const navigate = useNavigate();
	const { src, alt, serviceType, description } = serviceData;
	return (
		<article
			title={`Solicitar Servicio de ${serviceType}`}
			className=" group border border-royalBlue border-dashed rounded-xl overflow-hidden
			cursor-pointer bg-white hover:bg-royalBlue-400 hover:text-white transition "
			onClick={() => navigate('/service-selection')}
		>
			<img className="h-32 w-full object-cover" src={src} alt={alt} />

			<div className="p-3 ">
				<h4 className="  ">{serviceType}</h4>
				<p className="text-xs text-gray-500 group-hover:text-white  ">
					{description}
				</p>
			</div>
		</article>
	);
}

export default Services;
