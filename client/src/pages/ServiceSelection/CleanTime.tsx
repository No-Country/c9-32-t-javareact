import { ServiceToggleButton } from "@/components/shared/serviceToggleButton"
import { GlobalContext } from "@/context/GlobalContext";
import { useState, useContext } from 'react';

const CleanTime = () => {
	const infoArray = ['Mañana (de 8 a 12hs)', 'Tarde (de 13 a 17hs)', 'Noche (de 18 a 22hs)'];
	const [selected, setSelected] = useState(infoArray[0]);
	

  return (
    <div className="clean-container">
      <h4 className="clean-title">Selecciona el turno para la limpieza</h4>
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
        </div>;
				})}
     
      </div>
    
    </div>
  )
}
export default CleanTime