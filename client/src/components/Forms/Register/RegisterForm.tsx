import { useForm } from 'react-hook-form';
import { Label } from '../../shared/Label';

export type FormValues = {
	userName: string;
	email: string;
	phone: number;
	password: string;
	repeatPassword: string;

	// message: string;
};

const inputClasses = {
	root: `group relative h-12 md:h-14 w-full rounded border border-neutral-500  font-roboto focus-within:border-royalBlue-400  focus-within:ring-1 focus-within:ring-royalBlue-400 `,
	label: `absolute left-2 top-1/2 z-0 -translate-y-1/2 bg-white px-1 text-base pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-primary`,
	input: `z-10 h-full w-full rounded-md px-3.5 py-4 outline-none`,
};

const RegisterForm = () => {
	const {
		register,
		reset,
		formState: { errors, isValid },
	} = useForm<FormValues>({ mode: 'onChange' });

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<form
				className="form"
				onSubmit={handleSubmit}
				action="submit"
				autoComplete="new-password"
			>
				<div
					className={`${inputClasses.root} ${
						errors.userName && 'border-2  border-red-600'
					}`}
				>
					<input
						className={`${inputClasses.input} `}
						type="text"
						{...register('userName', {
							required: 'Campo requerido',
							minLength: {
								value: 1,
								message: 'Demasiado corto',
							},
						})}
						placeholder=" "
						autoComplete="off"
					/>
					<Label
						name={'userName'}
						customClass={inputClasses.label}
						error={errors.userName}
						label="Nombre de usuario"
					/>
				</div>
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
				</div>{' '}
				<div
					className={`${inputClasses.root} ${
						errors.phone && 'border-2  border-red-600'
					}`}
				>
					<input
						className={`${inputClasses.input} `}
						type="number"
						{...register('phone', {
							required: 'Campo requerido',
							minLength: {
								value: 1,
								message: 'Demasiado corto',
							},
						})}
						autoComplete="off"
						placeholder=" "
					/>
					<Label
						name={'lastName'}
						error={errors.phone}
						label="Teléfono"
						customClass={inputClasses.label}
					/>
				</div>{' '}
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
					/>
					<Label
						name={'password'}
						error={errors.password}
						label="Contraseña"
						customClass={inputClasses.label}
					/>
				</div>
				<div
					className={`${inputClasses.root} ${
						errors.repeatPassword && 'border-2  border-red-600'
					}`}
				>
					<input
						className={`${inputClasses.input} `}
						{...register('repeatPassword', {
							required: 'Campo requerido',
						})}
						placeholder=" "
						autoComplete="off"
					/>
					<Label
						name={'message'}
						error={errors.repeatPassword}
						label="Confirmar Contraseña"
						customClass={inputClasses.label}
					/>
				</div>
				<button className="submit">Registrarse </button>
			</form>
		</>
	);
};
export default RegisterForm;
