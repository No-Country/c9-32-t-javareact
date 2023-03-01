import { Link } from 'react-router-dom';

const Terms = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center text-xs">
			<p>
				Si continúas, aceptas las{' '}
				<span className="terms-bold">Condiciones de del servicio </span>{' '}
				de Dustbusters y confirmas que has leido nuestra{' '}
				<span className="terms-bold">Política de privadidad.</span>
			</p>
			<span className="terms-bold">Aviso de recopilacion de datos</span>
			<p className="text-base my-4">
				Ya tienes cuenta?
				<Link
					className="ml-1  text-royalBlue hover:underline"
					to="/login"
				>
					Inicia sesión
				</Link>
			</p>
		</div>
	);
};
export default Terms;
