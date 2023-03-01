import { useForm } from "react-hook-form";
import Input from '@/components/shared/Input';

const PayMethod = () => {



  type FormValues = {
    payMethod : string;
    cardNumber: number;
    expireDate: string;
    safetyNumber:number
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
				className="flex flex-col gap-4 w-full lg:w-1/2 mx-auto"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Input
					error={Boolean(errors.payMethod)}
					helperText={errors?.payMethod?.message}
					placeholder="Método de pago"
					defaultValue="dfd"
					type="select"
					register={register('payMethod', {
						required: 'Campo requerido',
					})}
					value={watch('payMethod')}
				/>

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
  )
}
export default PayMethod