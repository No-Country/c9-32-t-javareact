import { useState, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { EyeClosed, EyeOpen } from '../icons';
import Input from '@components/shared/Input';
import { Label } from '../shared/Label';
import Header from './Register/Header';
import Terms from './Register/Terms';

export type FormValues = {
	email: string;
	password: string;
};

const LogIn = () => {
	const navigate = useNavigate();
	const [eyeClicked, setEyeClicked] = useState<boolean>(false);

	const {
		register,
		reset,
		getValues,
		formState: { errors, isValid },
	} = useForm<FormValues>({ mode: 'onChange' });

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate('/home');
	};

	const onHandleEyeClick = () => setEyeClicked(!eyeClicked);

	return (
		<>
			<Header />
			<main className="m-auto container">
				<div className="text-center pt-5">
					<h2 className="font-semibold text-xl">
						¡Bienvenido de Nuevo!
					</h2>
					<h3 className="font-medium text-lg">
						Inicia sesión en tu cuenta y disfruta de una experiencia
						de limpieza sin estrés.
					</h3>
				</div>
				<form
					className="form"
					onSubmit={handleSubmit}
					action="submit"
					autoComplete="new-password"
				>
					<Input
						error={Boolean(errors.email)}
						helperText={errors?.email?.message}
						placeholder="Email"
						type="email"
						register={register('email', {
							required: 'Campo requerido',
							pattern: {
								value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
								message: 'Error de formato',
							},
						})}
						value={getValues('email')}
					/>
					<Input
						error={Boolean(errors.password)}
						helperText={errors?.password?.message}
						placeholder="Password"
						type="password"
						register={register('password', {
							required: 'Campo requerido',
							minLength: {
								value: 5,
								message: 'Demasiado corto',
							},
						})}
						value={getValues('password')}
					/>
					<Link
						className="self-end text-gray-500 font-medium"
						to="/register"
					>
						¿Olvidaste tu contraseña?
					</Link>
					<button className="submit">Iniciar sesión</button>
				</form>
				<Terms />
			</main>
		</>
	);
};
export default LogIn;
