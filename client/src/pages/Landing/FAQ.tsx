import Accordion from '@/components/shared/Accordion';
import React from 'react';

const FAQ_DATA = [
	{
		id: 1,
		question: '¿Qué tipos de servicios de limpieza ofrecen?',
		answer: 'Ofrecemos una amplia gama de servicios de limpieza, que incluyen limpieza residencial, limpieza comercial, limpieza de mudanza y limpieza profunda. También podemos brindar servicios especializados como limpieza de alfombras, lavado de ventanas y más.',
	},
	{
		id: 2,
		question: '¿Cuánto tardará el servicio de limpieza?',
		answer: 'La duración del servicio de limpieza dependerá del tamaño de su hogar o negocio y del servicio específico que seleccione. Nuestro equipo le proporcionará un marco de tiempo estimado cuando reserve su servicio.',
	},
	{
		id: 3,
		question: '¿Necesito estar presente durante el servicio de limpieza?',
		answer: 'No, no es necesario que estés presente durante el servicio de limpieza. Sin embargo, le recomendamos que nos proporcione instrucciones detalladas y cualquier requisito específico que pueda tener de antemano.',
	},
	{
		id: 4,
		question: '¿Necesito proporcionar equipos y suministros de limpieza?',
		answer: 'No, nuestro equipo de profesionales de la limpieza traerá todo el equipo y suministros necesarios para completar el trabajo. Utilizamos productos y equipos de primera línea para garantizar que su espacio quede limpio y fresco. ',
	},
];

function FAQ() {
	return (
		<section className="py-24" id="FAQ">
			<h2 className="heading2">Preguntas frecuentes</h2>
			<hr className="border-royalBlue-500 my-8" />
			<div className="flex flex-col gap-6">
				{FAQ_DATA.map(({ id, question, answer }) => (
					<Accordion key={id} title={question}>
						<p className="p-4">
							{answer}
						</p>
					</Accordion>
				))}
			</div>
		</section>
	);
}

export default FAQ;
