import { GlobalContext } from '@/context/GlobalContext';
import { IServiceStorage } from '@/types';
import { useContext, useEffect, useState } from 'react';

const Summary = () => {
	const [data, setData] = useState<IServiceStorage>();
	useEffect(() => {
		const localData = localStorage.getItem('SERVICE_DATA');
		if (localData) {
			setData(JSON.parse(localData));
		}
	}, []);

	console.log(data);

	return (
		<div className="w-full divide-y-[1px] lg:self-start ">
			<h2 className="heading3 text-center">Resumen de compra</h2>
			<div className="flex flex-col  w-full  p-3">
				<span className="payment-label">Servicio</span>
				<span>Limpieza de {data?.servType}</span>
			</div>
			<div className="flex flex-col  w-full  p-3">
				<span className="opacity-60 text-customViolet">
					Tipo de limpieza
				</span>
				<span className="first-letter:capitalize">
					{' '}
					{data?.options.depth}{' '}
				</span>
			</div>
			<div className="flex flex-col  w-full  p-3">
				<span className="opacity-60 text-customViolet">
					Tamaño de tu hogar
				</span>
				<span>
					{data?.options.size === 'mediano'
						? 'Mediano(100m²)'
						: data?.options.size === 'grande'
						? 'Grande(150 m²)'
						: 'Pequeño(20 m²)'}
				</span>
			</div>
			<div className="flex flex-col  w-full  p-3">
				<span className="opacity-60 text-customViolet">
					Turno para la limpieza
				</span>
				<span>
					{data?.options.workday === 'noche'
						? 'Noche(de 18 a 22 hs)'
						: data?.options.workday === 'tarde'
						? 'Tarde(de 13 a 17 hs)'
						: 'Mañana(de 8 a 12 hs)'}
				</span>
			</div>
			<div className="flex flex-col  w-full  p-3">
				<span className="opacity-60 text-customViolet">
					Frecuencia de limpieza
				</span>
				<span>
					{data?.options.period === 'diario'
						? 'Todos los días'
						: data?.options.period === '2/semana'
						? '2 veces por semana '
						: data?.options.period === '3/semana'
						? '3 veces por semana'
						: 'Limpieza única'}{' '}
				</span>
			</div>
			<div className="flex flex-col  w-full  p-3">
				<span className="opacity-60 text-customViolet">
					Total a pagar - Servicio mensual
				</span>
				<span>$16.000</span>
			</div>
		</div>
	);
};
export default Summary;
