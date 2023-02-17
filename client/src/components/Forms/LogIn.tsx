import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { EyeClosed, EyeOpen } from '../icons';
import { Label } from '../shared/Label';
import Terms from './Register/Terms';
import logo from '@assets/logo.png';

export type FormValues = {
	email: string;
	password: string;
};

const inputClasses = {
	root: `group relative h-12 md:h-14 w-full rounded border border-neutral-500  font-roboto focus-within:border-royalBlue-400  focus-within:ring-1 focus-within:ring-royalBlue-400 `,
	label: `absolute left-2 top-1/2 z-0 -translate-y-1/2 bg-white px-1 text-base pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-primary`,
	input: `z-10 h-full w-full rounded-md px-3.5 py-4 outline-none`,
};

const LogIn = () => {
	const [eyeClicked, setEyeClicked] = useState<boolean>(false);

	const {
		register,
		reset,
		formState: { errors, isValid },
	} = useForm<FormValues>({ mode: 'onChange' });

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const onHandleEyeClick = () => setEyeClicked(!eyeClicked);

	return (
		<main className="m-auto container">
			<Link
				to="/"
				title="home"
				className="flex justify-center items-center gap-4"
			>
				<h1 className="text-4xl sm:text-5xl font-bold">DustBusters</h1>
				<img src={logo} className="w-14" />
			</Link>
			<div className="text-center pt-5">
				<h2 className="font-semibold text-xl">¡Bienvenido de Nuevo!</h2>
				<h3 className="font-medium text-lg">
					Inicia sesión en tu cuenta y disfruta de una experiencia de
					limpieza sin estrés.
				</h3>
			</div>
			<form
				className="form"
				onSubmit={handleSubmit}
				action="submit"
				autoComplete="new-password"
			>
				<div
					className={`${inputClasses.root} ${
						errors.email && 'border-2  border-red-600'
					}`}
				>
					<input
						className={`${inputClasses.input}  `}
						type="email"
						{...register('email', {
							required: 'Campo requerido',
							pattern: {
								value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
								message: 'Error de formato',
							},
						})}
						placeholder=" "
						autoComplete="off"
					/>
					<Label
						name={'email'}
						error={errors.email}
						label="Correo electrónico"
						customClass={inputClasses.label}
					/>
				</div>
				<div
					className={`${inputClasses.root} ${
						errors.password && 'border-2  border-red-600'
					}`}
				>
					<input
						className={`${inputClasses.input} `}
						{...register('password', {
							required: 'Campo requerido',
							minLength: {
								value: 5,
								message: 'Demasiado corto',
							},
						})}
						placeholder=" "
						autoComplete="off"
						type={eyeClicked ? 'text' : 'password'}
					/>
					<div
						className="absolute right-2 top-4"
						onClick={onHandleEyeClick}
					>
						{eyeClicked ? <EyeOpen /> : <EyeClosed />}
					</div>
					<Label
						name={'password'}
						error={errors.password}
						label="Contraseña"
						customClass={inputClasses.label}
					/>
				</div>
				<small className="self-end text-gray-500 font-medium">
					¿Olvidaste tu contraseña?
				</small>
				<button className="submit">Iniciar sesión</button>
			</form>
			<Terms />
		</main>
	);
};
export default LogIn;
