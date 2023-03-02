const CleanFrecuency = () => {
	return (
		<div className="clean-container">
			<h4 className="clean-title">
				Selecciona la frecuencia de la limpieza
			</h4>
			<p className="text-gray-600">
				Puedes optar por una limpieza única o una limpieza programada
			</p>
			<button>Limpieza única</button>
			<div className="flex gap-4 w-full justify-center items-center">
				<span className="line"></span>
				<span>O</span>
        <span className="line"></span>
			</div>
      <button className="button-custom">2 veces por semana</button>
      <button className="button-custom">3 veces por semana</button>
      <button className="button-custom">Todos los días</button>
		</div>
	);
};
export default CleanFrecuency;
