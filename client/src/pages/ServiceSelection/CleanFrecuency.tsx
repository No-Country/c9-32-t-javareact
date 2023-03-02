import { ServiceToggleButton } from "@/components/shared/serviceToggleButton";
import { GlobalContext } from "@/context/GlobalContext";
import { useState, useContext } from 'react';

const CleanFrecuency = () => {
	const infoArray = ['2 veces por semana', '3 veces por semana', 'Todos los días'];
	const [selected, setSelected] = useState(infoArray[0]);

	return (
		<div className="clean-container">
			<h4 className="clean-title">
				Selecciona la frecuencia de la limpieza
			</h4>
			<p className="text-gray-600">
				Puedes optar por una limpieza única o una limpieza programada
			</p>
		
      <div
          onClick={() => setSelected('Limpieza única')}
          className={`button-custom mb-2 ${
            selected === 'Limpieza única' &&
            'bg-customViolet text-white'
          }`}
        >
          {' '}
         Limpieza única
        </div>

			<div className="flex gap-4 w-full justify-center items-center">
				<span className="line"></span>
				<span>O</span>
				<span className="line"></span>
			</div>
			<div className="clean-container lg:flex-row">
				
      {infoArray.map((item) => {
					return <div
          onClick={() => setSelected(item)}
          className={`button-custom mb-2 ${
            selected === item &&
            'bg-customViolet text-white'
          }`}
        >
          {' '}
          {item}
        </div>;;
				})}
     

			</div>
		</div>
	);
};
export default CleanFrecuency;
