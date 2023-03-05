import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/shared/Button';
import Input from '@components/shared/Input';
import { Label } from '../../shared/Label';

import { signInUser } from '@api/access';
import { useNavigate } from 'react-router-dom';

export type FormValues = {
	name: string;
	email: string;
	password: string;
	phoneNumber: string;
	address: string;
};

interface onError {
	error: boolean;
	message: string;
}

const RegisterForm = () => {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<onError>({ error: false, message: '' });
	const {
		register,
		watch,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm<FormValues>({ mode: 'onChange' });

	const onSubmit = async (data: any) => {
		console.log(data);
		try {
			setIsLoading(true);
			setError({
				error: false,
				message: '',
			});
			const response = await signInUser(data);
			console.log(response);
			navigate('/home');
		} catch (error: any) {
			console.log(error);
			console.log(error?.response);
			setError({
				error: true,
				message: `Error al registrar ${error?.response?.data?.message}`,
			});
		} finally {
			setIsLoading(false);
		}
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
					error={Boolean(errors.name)}
					helperText={errors?.name?.message}
					placeholder="Nombre"
					type="text"
					register={register('name', {
						required: 'Campo requerido',
						minLength: {
							value: 3,
							message: 'Demasiado corto',
						},
					})}
					value={watch('name')}
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
					value={watch('email')}
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
					value={watch('password')}
				/>
				<Input
					error={Boolean(errors.address)}
					helperText={errors?.address?.message}
					placeholder="Dirección"
					type="address"
					register={register('address', {
						required: 'Campo requerido',
					})}
					value={watch('address')}
				/>

				<Input
					error={Boolean(errors.phoneNumber)}
					helperText={errors?.phoneNumber?.message}
					placeholder="Teléfono"
					type="text"
					register={register('phoneNumber', {
						required: 'Campo requerido',
					})}
					value={watch('phoneNumber')}
				/>
				{isLoading ? (
					<div className="lds-dual-ring " />
				) : (
					<Button type="submit" classes="w-full capitalize">
						Registrarse
					</Button>
				)}
			</form>
			<p className="text-center text-red-500 text-lg">{error.message}</p>
		</>
	);
};
export default RegisterForm;
