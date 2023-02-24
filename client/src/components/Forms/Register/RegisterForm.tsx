import { Button } from '@/components/shared/Button';
import Input from '@components/shared/Input';
import { useForm } from 'react-hook-form';
import { Label } from '../../shared/Label';

export type FormValues = {
	userName: string;
	email: string;
	phone: number;
	password: string;

	// message: string;
};

const RegisterForm = () => {
	const {
		register,
		getValues,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm<FormValues>({ mode: 'onChange' });

	const onSubmit = (data: any) => {
		console.log(data);
		
	};

	return (
		<>
			<form
				className="form"
				onSubmit={handleSubmit(onSubmit)}
				action="submit"
				autoComplete="new-password"
			>
				<Input
					error={Boolean(errors.userName)}
					helperText={errors?.userName?.message}
					placeholder="Nombre de usuario"
					type="text"
					register={register('userName', {
						required: 'Campo requerido',
						minLength: {
							value: 3,
							message: 'Demasiado corto',
						},
					})}
					value={getValues('userName')}
				/>
				<Input
					error={Boolean(errors.email)}
					helperText={errors?.email?.message}
					placeholder="Email"
					type="text"
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
					error={Boolean(errors.phone)}
					helperText={errors?.phone?.message}
					placeholder="Teléfono"
					type="text"
					register={register('phone', {
						required: 'Campo requerido',
					})}
					value={getValues('phone')}
				/>
				<Input
					error={Boolean(errors.password)}
					helperText={errors?.password?.message}
					placeholder="Contraseña"
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

				<Button type="submit" classes="w-full capitalize">
					Registrarse
				</Button>
			</form>
		</>
	);
};
export default RegisterForm;
