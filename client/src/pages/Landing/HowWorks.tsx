import { ReactElement } from 'react';

const STEPS_DATA = [
	{
		id: 1,
		desc: 'Escoge uno de los servicios que ofrecen diferentes compañías',
		icon: 'near_me',
	},
	{
		id: 2,
		desc: 'Reserva la fecha y hora preferida',
		icon: 'calendar_today',
	},
	{
		id: 3,
		desc: 'Disfruta el dia de limpieza',
		icon: 'cleaning_services',
	},
	{
		id: 4,
		desc: 'Paga despues de que la limpieza este hecha',
		icon: 'payments',
	},
	{
		id: 5,
		desc: 'Califica y Comparte tu experiencia',
		icon: 'star',
	},
];

function HowWorks(): ReactElement {
	return (
		<section className="py-24">
			<h2 className="heading2">¿Cómo funciona?</h2>
			<div className="mt-12 flex flex-wrap justify-center xl:[&>*:nth-child(even)]:pt-[10%] gap-4">
				{STEPS_DATA.map((step) => (
					<Step desc={step.desc} icon={step.icon} key={step.id} />
				))}
			</div>
		</section>
	);
}

function Step({ desc, icon }: Record<'desc' | 'icon', string>) {
	return (
		<div className="flex-1 min-w-[200px] ">
			<div className="w-16 h-16 flex items-center justify-center rounded-full bg-royalBlue-50/40 text-royalBlue-500 mb-2">
				<i className="material-icons text-4xl">{icon}</i>
			</div>
			<p className="text-xl">
				<span className="text-royalBlue-500 font-bold mr-1">
					{desc.split(' ')[0]}
				</span>
				{desc.split(' ').slice(1).join(' ')}
			</p>
		</div>
	);
}

export default HowWorks;
