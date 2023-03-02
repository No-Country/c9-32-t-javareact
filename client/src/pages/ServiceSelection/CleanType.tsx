import Button from '@/components/shared/Button';

const CleanType = () => {
	return (
		<div className="clean-container">
			<h4 className="clean-title">Selecciona un tipo de limpieza</h4>
			<div className="flex gap-2">
				<div className="w-1/2">
					<button className='button-custom mb-2'>Simple</button>
					<p className='text-small'>
						Tareas esenciales como quitar el polvo, aspirar, barrer
						y limpiar superficies. Es ideal para mantener un hogar
						limpio de forma regular.
					</p>
				</div>
				<div className="w-1/2">
					<button className='button-custom mb-2'>Profunda</button>
					<p className='text-small'>
						Incluye limpieza adicional de zonas de difícil acceso,
						como zócalos y estanterías altas, y limpieza más
						intensiva de baños y cocinas. Es ideal para dejar tu
						hogar en plena forma después de un período prolongado
						sin limpiar o antes de un gran evento.
					</p>
				</div>
			</div>
		</div>
	);
};
export default CleanType;
