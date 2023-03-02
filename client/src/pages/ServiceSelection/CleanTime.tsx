import { ServiceToggleButton } from "@/components/shared/serviceToggleButton"
import { GlobalContext } from "@/context/GlobalContext";
import { useState, useContext } from 'react';

const CleanTime = () => {
	

  return (
    <div className="clean-container">
      <h4 className="clean-title">Selecciona el turno para la limpieza</h4>
      <div className="clean-container lg:flex-row">
      
      <ServiceToggleButton text={'Mañana (de 8 a 12hs)'} />
      <ServiceToggleButton text={'Tarde (de 13 a 17hs)'}  />
      <ServiceToggleButton text={'Noche (de 18 a 22hs)'}  />

      </div>
    
    </div>
  )
}
export default CleanTime