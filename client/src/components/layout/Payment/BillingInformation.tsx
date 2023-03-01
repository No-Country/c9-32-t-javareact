import { useForm } from "react-hook-form";
import Input from '@/components/shared/Input';

const BillingInformation = () => {

  
  type FormValues = {
    cardHolderName : string;
    billingAddress: string;
    city: string;
    zipCode:number
    phoneNumber:number
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
      <h2 className="heading3 text-center">Información de facturación</h2>
      <form
				className="flex flex-col gap-4 w-full lg:w-1/2 mx-auto"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Input
					error={Boolean(errors.cardHolderName)}
					helperText={errors?.cardHolderName?.message}
					placeholder="Nombre del titular"
					type="text"
					register={register('cardHolderName', {
						required: 'Campo requerido',
					})}
					value={watch('cardHolderName')}
				/>

				<Input
					error={Boolean(errors.billingAddress)}
					helperText={errors?.billingAddress?.message}
					placeholder="Dirección de facturación"
					type="text"
					register={register('billingAddress', {
						required: 'Campo requerido',
					})}
					value={watch('billingAddress')}
				/>

        
        <Input
					error={Boolean(errors.city)}
					helperText={errors?.city?.message}
					placeholder="Ciudad"
					
					type="text"
					register={register('city', {
						required: 'Campo requerido',
					})}
					value={watch('city')}
				/>

				<Input
					error={Boolean(errors.zipCode)}
					helperText={errors?.zipCode?.message}
					placeholder="Código postal"
					type="number"
					register={register('zipCode', {
						required: 'Campo requerido',
					})}
					value={watch('zipCode')}
				/>
        
				<Input
					error={Boolean(errors.phoneNumber)}
					helperText={errors?.phoneNumber?.message}
					placeholder="Teléfono"
					type="number"
					register={register('phoneNumber', {
						required: 'Campo requerido',
					})}
					value={watch('phoneNumber')}
				/>
        
        </form>
    </div>
  )
}
export default BillingInformation