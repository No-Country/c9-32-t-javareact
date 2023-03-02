import { useNavigate } from 'react-router-dom';
import data from '@/utils/data.json';
import { IService } from '@/types';
import { useGlobalData } from '@context/GlobalContext';

function Services() {
	const { servTypes } = useGlobalData();

	return (
		<section className="my-6" id="orders">
			<h3 className="heading3 ">Nuestros servicios</h3>
			<p>Selecciona el servicio que quieras solicitar</p>
			<div className="mt-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
					{servTypes.map((service: any) => {
						return (
							<ServiceCard
								key={service.id}
								serviceData={service}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

function ServiceCard({ serviceData }: any) {
	const navigate = useNavigate();
	const { type, desc } = serviceData;
	const serviceLocal = data.services.find(
		(service) => service.serviceType === type,
	);

	return (
		<article
			title={`Solicitar Servicio de ${type}`}
			className=" group border border-royalBlue border-dashed rounded-xl overflow-hidden
			cursor-pointer bg-white hover:bg-royalBlue-400 hover:text-white transition "
			onClick={() => navigate(`/serviceselection/${type}`)}
		>
			<img
				className="h-32 w-full object-cover"
				src={serviceLocal?.src}
				alt={type}
			/>

			<div className="p-3 ">
				<h4 className="  ">{type}</h4>
				<p className="text-xs text-gray-500 group-hover:text-white  ">
					{desc}
				</p>
			</div>
		</article>
	);
}

export default Services;
