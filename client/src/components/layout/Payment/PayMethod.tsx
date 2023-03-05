import { useForm } from 'react-hook-form';
import Input from '@/components/shared/Input';

const PayMethod = () => {
	const inputClasses = {
		root: `group relative h-14 w-full rounded-md border border-royalBlue-400 focus-within:border-royalBlue-400  focus-within:ring-1 focus-within:ring-royalBlue-400 mb-2`,
		label: `absolute left-2 top-1/2 z-0 -translate-y-1/2 bg-white px-1 text-base pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-primary`,
		input: `z-10 h-full w-full rounded-md px-3.5 py-4 outline-none`,
	};

	type FormValues = {
		payMethod: string;
		cardNumber: number;
		expireDate: string;
		safetyNumber: number;
	};
	const {
		register,
		reset,
		watch,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormValues>({
		mode: 'onChange',
	});
	function onSubmit(data: any) {
		console.log(data);
	}

	return (
		<div className="w-full">
			<h2 className="heading3 text-center">Método de pago</h2>
			<div>
				<form
					className="flex flex-col gap-4 w-full  mx-auto"
					onSubmit={handleSubmit(onSubmit)}
				>
				
					<div className={`${inputClasses.root} pr-2`}>
						<label className={`${inputClasses.label} top-0`}>
							Método de pago
						</label>

						<select className={`${inputClasses.input}`}>
							<option value="efectivo">Efectivo</option>
							<option value="debito">Tarjeta de crédito</option>
							<option value="credito">Tarjeta de débito</option>
						</select>
					</div>

					<Input
						error={Boolean(errors.cardNumber)}
						helperText={errors?.cardNumber?.message}
						placeholder="Número de la tarjeta"
						type="number"
						register={register('cardNumber', {
							required: 'Campo requerido',
						})}
						value={watch('cardNumber')}
					/>

					<div className="w-full flex gap-2">
						<Input
							error={Boolean(errors.expireDate)}
							helperText={errors?.expireDate?.message}
							placeholder="Fecha de vencimiento"
							defaultValue="dfd"
							type="date"
							register={register('expireDate', {
								required: 'Campo requerido',
							})}
							value={watch('expireDate')}
						/>

						<Input
							error={Boolean(errors.safetyNumber)}
							helperText={errors?.safetyNumber?.message}
							placeholder="Código de seguridad"
							type="number"
							register={register('safetyNumber', {
								required: 'Campo requerido',
							})}
							value={watch('safetyNumber')}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};
export default PayMethod;
