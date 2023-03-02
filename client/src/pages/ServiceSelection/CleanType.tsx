import Button from '@/components/shared/Button';
import { ServiceToggleButton } from '@/components/shared/serviceToggleButton';
import { GlobalContext } from '@/context/GlobalContext';
import { useState, useContext } from 'react';
const CleanType = () => {

	const [selected, setSelected] = useState('simple');

	const infoArray = [
		{
			text: 'Tareas esenciales como quitar el polvo, aspirar, barrer y limpiar superficies. Es ideal para mantener un hogarlimpio de forma regular.',
			type: 'Simple',
		},
		{
			text: 'Incluye limpieza adicional de zonas de difícil acceso, como zócalos y estanterías altas, y limpieza másintensiva de baños y cocinas. Es ideal para dejar tu hogar en plena forma después de un período prolongado sin limpiar o antes de un gran evento.',
			type: 'Profunda',
		},
	];
	return (
		<div className="clean-container">
			<h4 className="clean-title">Selecciona un tipo de limpieza </h4>
			<div className="flex gap-2">
				<div className=" clean-container flex-row ">
					{infoArray.map((item) => {
						return (
							<div className='clean-container w-1/2 self-start '>
								<ServiceToggleButton
									text={item.type}
									customClass=''
								/>
								<p className='text-small'>{item.text}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default CleanType;
