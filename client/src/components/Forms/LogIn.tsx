const LogIn = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<section className="py-10">
			<div className="text-center">
				<h2 className="font-semibold text-xl">¡Bienvenido de Nuevo!</h2>
				<h3 className="font-medium text-lg">
					Inicia sesión en tu cuenta y disfruta de una experiencia de
					limpieza sin estrés.
				</h3>
			</div>

			<form className="form" action="submit" onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Correo electrónico"
					className="input-container"
				/>
				<div className="self-stretch flex flex-col">
					<input
						type="password"
						placeholder="Contraseña"
						className="input-container"
					/>
					<small className="self-end font-semibold">
						¿Olvidaste tu constraseña?
					</small>
				</div>

				<button className="submit">Iniciar Sesión</button>
				<p className="text-center font-medium">
					Si continúas, aceptas las{' '}
					<strong>Condiciones de servicio</strong> de DustBusters y
					confirmas que has leído nuestra{' '}
					<strong>Política de Privacidad</strong> <br />
					<strong>Aviso de recopilación de datos.</strong>{' '}
				</p>
			</form>
		</section>
	);
};
export default LogIn;
