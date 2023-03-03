import { useGlobalData } from '@/context/GlobalContext';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';
import { checkoutCreatePref, createUserSchedule } from '@/api/service-schedule';
import { useState } from 'react';

type FormValues = {
	direction: string;
	programDate: string;
};
interface onError {
	error: boolean;
	message: string;
}

const PurchaseDetail = () => {
	const { userLocation, userData } = useGlobalData();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<onError>({ error: false, message: '' });
	const [paymendType, setPaymendType] = useState('MP');
	const navigator = useNavigate();
	const cost =
		JSON.parse(localStorage.getItem('SERVICE_DATA') || '')?.cost || 0;

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
			if (paymendType === 'MP') {
				const responseCheckout = await checkoutCreatePref(
					response.data.id,
				);
				console.log(responseCheckout);
				window.location.replace(responseCheckout.data);
				//window.location.href = '...';
			} else {
				navigator('/orders');
			}
		} catch (error: any) {
			console.log(error);
			console.log(error?.response);
			setError({
				error: true,
				message: `Error al solicitar servicio ${
					error?.response?.data || ''
				}`,
			});
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
				<div className=" ">
					<h2 className="heading3 text-center ">Método de pago</h2>

					<div className="input-radio-container justify-start">
						<input
							name="paymentType"
							type="radio"
							id="MP"
							className="peer hidden"
							value="MP"
							defaultChecked
							onClick={() => setPaymendType('MP')}
						/>
						<label htmlFor="MP" className="button-custom">
							Mercado Pago
						</label>
						<img
							className="h-20"
							src="https://ps.w.org/woocommerce-mercadopago/assets/icon-128x128.png?rev=2653727"
						/>
					</div>
					<div className="input-radio-container justify-start">
						<input
							name="paymentType"
							type="radio"
							id="unica"
							className="peer hidden"
							value="unica"
							onClick={() => setPaymendType('Efectivo')}
						/>
						<label htmlFor="unica" className="button-custom">
							Efectivo
						</label>
						<span className="ml-2 text-sm mb-2">
							Paga en efectivo el día de limpieza
						</span>
					</div>
				</div>
				<hr className="border-royalBlue my-4" />
				{isLoading ? (
					<div className="lds-dual-ring " />
				) : (
					<Button
						classes="w-full flex justify-between items-center "
						type="submit"
					>
						<span>Confirmar compra</span>
						<span className=" ml-2 flex items-center">
							${cost}
							<i className="material-icons text-2xl  text-white ml-2">
								chevron_right
							</i>
						</span>
					</Button>
				)}
				<p className="text-center text-red-500 text-lg">
					{error.message}
				</p>
			</form>
		</div>
	);
};
export default PurchaseDetail;
