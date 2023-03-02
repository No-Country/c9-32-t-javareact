import { ServiceToggleButton } from "@/components/shared/serviceToggleButton";
import { GlobalContext } from "@/context/GlobalContext";
import { useState, useContext } from 'react';

const CleanFrecuency = () => {


	return (
		<div className="clean-container">
			<h4 className="clean-title">
				Selecciona la frecuencia de la limpieza
			</h4>
			<p className="text-gray-600">
				Puedes optar por una limpieza única o una limpieza programada
			</p>
		
      <ServiceToggleButton text={'Limpieza única'}/>

			<div className="flex gap-4 w-full justify-center items-center">
				<span className="line"></span>
				<span>O</span>
				<span className="line"></span>
			</div>
			<div className="clean-container lg:flex-row">
				
        <ServiceToggleButton text={'2 veces por semana'} />
        <ServiceToggleButton text={'3 veces por semana'} />
        <ServiceToggleButton text={'Todos los días'} />

			</div>
		</div>
	);
};
export default CleanFrecuency;
