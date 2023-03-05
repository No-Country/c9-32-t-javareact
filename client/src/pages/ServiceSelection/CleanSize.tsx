import { ServiceToggleButton } from '@/components/shared/serviceToggleButton';
import { GlobalContext } from '@/context/GlobalContext';
import { useState, useContext } from 'react';

const CleanSize = () => {
	const infoArray = ['Pequeño (20m²)', 'Mediano (100m²)', 'Grande (150m²)'];
	const [selected, setSelected] = useState(infoArray[0]);

	return (
		<div className="clean-container">
			<h4 className="clean-title">Selecciona el tamaño de tu hogar</h4>
			<div className="clean-container lg:flex-row">
				{infoArray.map((item) => {
					return (
						<div
							onClick={() => setSelected(item)}
							className={`button-custom mb-2 ${
								selected === item &&
								'bg-customViolet text-white'
							}`}
						>
							{' '}
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default CleanSize;
