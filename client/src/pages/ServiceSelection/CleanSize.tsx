import { ServiceToggleButton } from "@/components/shared/serviceToggleButton";
import { GlobalContext } from "@/context/GlobalContext";
import { useState, useContext } from 'react';

const CleanSize = () => {


	return (
		<div className="clean-container">
			<h4 className="clean-title">Selecciona el tamaño de tu hogar</h4>
      <div className="clean-container lg:flex-row">
      
      <ServiceToggleButton text={'Pequeño (20m²)'} />
      <ServiceToggleButton text={'Mediano (100m²)'}  />
      <ServiceToggleButton text={'Grande (150m²)'}  />

      </div>
		

		</div>
	);
};
export default CleanSize;
