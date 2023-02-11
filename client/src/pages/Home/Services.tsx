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
			<div className="flex flex-wrap   mt-8">
				<ServiceCard
					title="Limpieza de Residencias"
					desc="
                    Limpieza completa en el hogar u oficina con productos que no
                    haran daño a tu salud ni a la de tus mascotas.
                  "
					img="https://www.supercleanss.com/imgs/casa-limpia.png"
				/>
				<ServiceCard
					title="Limpieza de Oficinas"
					desc="
                    Limpieza completa en el hogar u oficina con productos que no
                    haran daño a tu salud ni a la de tus mascotas.
                  "
					img="https://www.supercleanss.com/imgs/escritorio-de-oficina.png"
				/>
				<ServiceCard
					title="Servicio de Fumigación"
					desc="
                    Proteja su hogar u oficina, somos expertos en la exterminacíon de todo tipo de plagas
                  "
					img="https://www.supercleanss.com/imgs/fumigar.png"
				/>
				<ServiceCard
					title="Mantenimiento de Areas Verdes"
					desc="
                    Limpieza de terrenos, mantenimiento a sus jardines y áreas verdes en residencias y comercios. 
                  "
					img="https://www.supercleanss.com/imgs/fumigar.png"
				/>
				<ServiceCard
					title="Desinfección con Nebulización"
					desc="
                    Utilizado para la aplicación de desinfectantes debido a su tamaño de gota óptimo para combatir gérmenes, hongos y virus. 
                  "
					img="https://www.supercleanss.com/imgs/desinfectante.png"
				/>
			</div>
		</section>
	);
}

interface service {
	title: string;
	desc: string;
	img: string;
}

function ServiceCard({ title, desc, img }: service): ReactElement {
	return (
		<div className="xl:w-1/3 md:w-1/2 p-4">
			<div className="border border-gray-200 p-6 rounded-lg">
				<div className="w-auto h-auto inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
					<img src={img} className="w-16 h-16" />
				</div>
				<h2 className="text-lg text-gray-900 font-medium title-font mb-2">
					{title}
				</h2>
				<p className="leading-relaxed text-base">{desc}</p>
			</div>
		</div>
	);
}

export default Services;
