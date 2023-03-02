import { useGlobalData } from '@/context/GlobalContext';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';
import { checkoutCreatePref, createUserSchedule } from '@/api/service-schedule';
import { useState } from 'react';

type FormValues = {
	direction: string;
	programDate: string;
};

const PurchaseDetail = () => {
	const { userLocation, userData } = useGlobalData();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		register,
		reset,
		watch,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormValues>({
		mode: 'onChange',
		defaultValues: {
			direction: userLocation,
		},
	});

	async function onSubmit(data: any) {
		console.log(data);
		try {
			setIsLoading(true);
			const summary = JSON.parse(
				localStorage.getItem('SERVICE_DATA') || '',
			);
			const payload = {
				...data,
				status: 'pendiente',
				...summary.options,
				servType: {
					type: summary.servType,
				},
				user: {
					email: userData?.email,
				},
			};
			console.log('payload', payload);

			const response = await createUserSchedule(payload);

			console.log(response);
			const responseCheckout = await checkoutCreatePref(response.data.id);
			console.log(responseCheckout);
			//window.location.href = '...';
			window.location.replace(responseCheckout.data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="w-full">
			<h2 className="heading3 text-center ">Detalle de la compra</h2>
			<form
				className="flex flex-col gap-4 w-full mx-auto"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Input
					error={Boolean(errors.direction)}
					helperText={errors?.direction?.message}
					placeholder="Dirección"
					defaultValue="dfd"
					type="text"
					register={register('direction', {
						required: 'Campo requerido',
					})}
					value={watch('direction')}
				/>

				<Input
					error={Boolean(errors.programDate)}
					helperText={errors?.programDate?.message}
					placeholder="Inicio del servicio"
					type="date"
					register={register('programDate', {
						required: 'Campo requerido',
					})}
					value={watch('programDate')}
				/>
				{isLoading ? (
					<div className="lds-dual-ring " />
				) : (
					<Button
						classes="w-full flex justify-between items-center "
						type="submit"
					>
						<span>Confirmar compra</span>
						<span className=" ml-2 flex items-center">
							$16.000
							<i className="material-icons text-2xl  text-white ml-2">
								chevron_right
							</i>
						</span>
					</Button>
				)}
			</form>
		</div>
	);
};
export default PurchaseDetail;
