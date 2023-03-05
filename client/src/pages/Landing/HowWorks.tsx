import { ReactElement } from 'react';
const STEPS_DATA = [
	{
		id: 1,
		desc: 'Escoge uno de los servicios que ofrecemos',
		icon: 'touch_app',
	},
	{
		id: 2,
		desc: 'Reserva la fecha y hora preferida',
		icon: 'calendar_today',
	},
	{
		id: 3,
		desc: 'Paga por Mercado Pago',
		icon: 'payments',
	},
	{
		id: 4,
		desc: 'Disfruta el dia de limpieza',
		icon: 'cleaning_services',
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
			<div
				className="mt-12 flex flex-wrap justify-center xl:[&>*:nth-child(even)]:pt-32
				 gap-12 xl:gap-0 [&>*:nth-child(odd)>svg]:scale-x-[-1] [&>*:nth-last-child(1)>svg]:hidden"
			>
				{STEPS_DATA.map((step) => (
					<Step desc={step.desc} icon={step.icon} key={step.id} />
				))}
			</div>
		</section>
	);
}

function Step({ desc, icon }: Record<'desc' | 'icon', string>) {
	return (
		<div className="flex-1 min-w-[200px] relative">
			<DottedCurvedLine />
			<div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-[#eee] text-royalBlue-500 mx-auto sm:mx-0 xl:mx-auto  mb-6">
				<i className="material-icons text-3xl">{icon}</i>
			</div>
			<p className="text-xl mx-[10%] md:mx-0  text-center md:text-left">
				<span className="text-royalBlue-500 font-bold mr-1">
					{desc.split(' ')[0]}
				</span>
				{desc.split(' ').slice(1).join(' ')}
			</p>
		</div>
	);
}

function DottedCurvedLine() {
	return (
		<svg
			className=" hidden xl:block absolute top-7 -right-20"
			width={170}
			height={135}
			viewBox="0 0 115 91"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M113.346 2.60493C113.346 2.60493 91.6523 1 77.6524 7.5C63.6525 14 59.1523 18.5002 50.1522 30.5001C41.1522 42.5 40.6526 55.9998 31.1526 69.4999C21.6525 83.0001 2.34613 88.6049 2.34613 88.6049"
				stroke="#2463EB"
				strokeWidth={3}
				strokeLinecap="round"
				strokeDasharray="6 6"
			/>
		</svg>
	);
}

export default HowWorks;
