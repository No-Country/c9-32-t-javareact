import { useGlobalData } from "@/context/GlobalContext";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Input from '@/components/shared/Input';

type FormValues = {
	direction: string;
	programDate: string;
	time: string;
};

const PurchaseDetail = () => {
	const { userLocation } = useGlobalData();

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


  function onSubmit(data: any) {
		console.log(data);
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
        </form>
    </div>
  )
}
export default PurchaseDetail