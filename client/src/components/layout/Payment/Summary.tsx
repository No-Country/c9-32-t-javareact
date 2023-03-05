import { GlobalContext } from '@/context/GlobalContext';
import { IServiceStorage } from '@/types';
import { useContext, useEffect, useState } from 'react';

const optionsLabels: any = {
	depth: {
		name: 'Tipo de limpieza',
	},
	size: {
		name: 'Tamaño del espacio',
	},
	period: { name: 'Frecuencia de limpieza' },
	workday: {
		name: 'Turno para la limpieza',
	},
	rooms: {
		name: 'Espacios de trabajo',
	},
};
const keysLabel: any = {
	simple: 'Simple',
	profunda: 'Profunda',
	pequeño: 'Pequeño(20 m²)',
	mediano: 'Mediano(100 m²)',
	grande: 'Grande(150 m²)',
	mañana: 'Mañana(de 8 a 12 hs)',
	tarde: 'Tarde(de 13 a 17 hs)',
	noche: 'Noche(de 18 a 22 hs)',
	unica: 'Limpieza única',
	'2/semana': '2 veces por semana',
	'3/semana': '3 veces por semana',
	diario: 'Todos los días',
	1: '1 a 3',
	4: '4 a 10',
	10: 'Mas de 10',
};

const Summary = () => {
	const [data, setData] = useState<any>({});
	const [list, setList] = useState<any>([]);

	useEffect(() => {
		try {
			const localData = localStorage.getItem('SERVICE_DATA');
			if (localData) {
				const obj = JSON.parse(localData);
				console.log(obj);
				setData(JSON.parse(localData));
				setList(Object.entries(obj?.options));
			}
		} catch (error) {
			console.log(error);
		}
	}, []);

	console.log(data);

	return (
		<div className="w-full divide-y-[1px] lg:self-start ">
			<h2 className="heading3 text-center">Resumen de compra</h2>
			{list.map(([entry, key]: any) => (
				<div className="flex flex-col  w-full  p-3">
					<span className="payment-label">
						{optionsLabels?.[entry].name || ''}
					</span>
					<span className="capitalize">{keysLabel[key] || ''}</span>
				</div>
			))}
			<div className="flex flex-col  w-full  p-3">
				<span className="payment-label">Servicio</span>
				<span>Limpieza de {data?.servType}</span>
			</div>

			<div className="flex flex-col  w-full  p-3">
				<span className="opacity-60 text-customViolet">
					Total a pagar
				</span>
				<span>${data?.cost}</span>
			</div>
		</div>
	);
};
export default Summary;
