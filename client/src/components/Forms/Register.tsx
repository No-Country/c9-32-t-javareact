import { useForm } from 'react-hook-form';
import { Label } from '../shared/Label';

export type FormValues = {
	name: string;
	lastName: string;
	email: string;
	password: string;
	repeatPassword: string;

	// message: string;
};

const inputClasses = {
	root: `group relative h-14 w-full rounded-md border border-royalBlue-400 focus-within:border-royalBlue-400  focus-within:ring-1 focus-within:ring-royalBlue-400 `,
	label: `absolute left-2 top-1/2 z-0 -translate-y-1/2 bg-white px-1 text-base pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-primary`,
	input: `z-10 h-full w-full rounded-md px-3.5 py-4 outline-none`,
};

const Register = () => {
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
				<div className={`${inputClasses.root}`} >
					<input
						className={`${inputClasses.input} `}
						type="text"
						{...register('name', {
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
						name={'name'}
						customClass={inputClasses.label}
						error={errors.name}
						label="Nombre"
					/>
				</div>
				<div className={`${inputClasses.root}`} >
					<input
						className={`${inputClasses.input} `}
						type="text"
						{...register('lastName', {
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
						error={errors.lastName}
						label="Apellido"
						customClass={inputClasses.label}
					/>
				</div>{' '}
				<div className={`${inputClasses.root}`} >
					<input
						className={`${inputClasses.input} `}
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
						label="Email"
						customClass={inputClasses.label}
					/>
				</div>{' '}
				<div className={`${inputClasses.root}`} >
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
						name={'message'}
						error={errors.password}
						label="Contraseña"
						customClass={inputClasses.label}
					/>
				</div>
				<div className={`${inputClasses.root}`} >
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
						label="Repetir Contraseña"
						customClass={inputClasses.label}
					/>
				</div>
				<button className="submit">Registrarse </button>
			</form>
		</>
	);
};
export default Register;
