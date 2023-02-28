import { useState, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { EyeClosed, EyeOpen } from '../icons';
import hero_img from '@assets/banner.png';
import Input from '@components/shared/Input';
import { Label } from '../shared/Label';
import Header from './Register/Header';

import { loginUser } from '@api/access';
import Button from '@components/shared/Button';

type FormValues = {
	email: string;
	password: string;
};
interface onError {
	error: boolean;
	message: string;
}
const LogIn = () => {
	const navigate = useNavigate();
	const [eyeClicked, setEyeClicked] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<onError>({ error: false, message: '' });

	const {
		register,
		reset,
		watch,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormValues>({ mode: 'onChange' });

	const onSubmit = async (data: any) => {
		console.log(data);

		try {
			setIsLoading(true);
			setError({
				error: false,
				message: '',
			});
			const response = await loginUser(data);
			console.log(response);
			navigate('/home');
		} catch (error: any) {
			console.log(error);
			console.log(error?.response);
			setError({
				error: true,
				message: `Error al iniciar sesión ${
					error?.response?.data || ''
				}`,
			});
		} finally {
			setIsLoading(false);
		}
	};

	const onHandleEyeClick = () => setEyeClicked(!eyeClicked);

	return (
		<>
			<Header />
			<main className="m-auto container flex justify-between  gap-2">
				<div className="">
					<h2 className="font-semibold text-4xl text-bold">
						¡Bienvenido de Nuevo!
					</h2>
					<h3 className="font-medium text-md my-6">
						Inicia sesión en tu cuenta y disfruta de una experiencia
						de limpieza sin estrés.
					</h3>
					<form
						className="form"
						onSubmit={handleSubmit(onSubmit)}
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
							value={watch('email')}
						/>
						<Input
							error={Boolean(errors.password)}
							helperText={errors?.password?.message}
							placeholder="Password"
							type="password"
							register={register('password', {
								required: 'Campo requerido',
							})}
							value={watch('password')}
						/>
						<Link
							className="self-end text-gray-500 font-medium"
							to="/register"
						>
							¿Olvidaste tu contraseña?
						</Link>
						{!isLoading && (
							<Button type="submit" classes="w-full capitalize">
								Iniciar Sesión
							</Button>
						)}
					</form>
					<p className="text-center text-red-500 text-lg">
						{error.message}
					</p>
					<p className="">
						¿No tienes cuenta?
						<Link
							className="ml-1 text-royalBlue hover:underline"
							to="/register"
						>
							Regístrate
						</Link>
					</p>
				</div>
				<div className="w-1/3 hidden lg:inline">
					<img
						className="object-cover object-center rounded w-full"
						alt="hero"
						src={hero_img}
					/>
				</div>
			</main>
		</>
	);
};
export default LogIn;
