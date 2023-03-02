import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { useGlobalData } from '@context/GlobalContext';
import { useForm } from 'react-hook-form';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { createUserSchedule } from '@api/service-schedule';

type FormValues = {
	direction: string;
	programDate: string;
	time: string;
};
function ServiceSelection() {
	const navigator = useNavigate();
	const { userLocation, userData } = useGlobalData();
	const { serviceType = 'Hogar' } = useParams();
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
			const payload = {
				...data,
				servType: {
					type: serviceType,
				},
				user: {
					email: userData?.email,
				},
			};
			const response = await createUserSchedule(payload);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
		navigator('/payment');
	}

	return (
		<section className="flex flex-col gap-4">
			<form
				className="flex flex-col gap-4 w-full lg:w-1/2 mx-auto"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h3 className="heading3 my-4">Servicio de {serviceType}</h3>
				<p className=" text-sm">
					Nos especializamos en limpiar y organizar meticulosamente su
					hogar. Incluye tareas como quitar el polvo, aspirar, barrer,
					trapear, limpiar superficies y limpiar muebles y accesorios.
				</p>
				<hr className="border-gray-400 my-4" />
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
					placeholder="Fecha"
					type="date"
					register={register('programDate', {
						required: 'Campo requerido',
					})}
					value={watch('programDate')}
				/>

				{/* <div
					className="flex flex-row p-2 gap-2 justify-center flex-wrap"
					x-data="app"
				>
					<p className="w-full">
						Selecciona el turno para la limpieza
					</p>
					<div>
						<input
							type="radio"
							id="mañana"
							className="peer hidden"
							value="mañana"
							defaultChecked
							{...register('time', {
								required: 'Campo requerido',
							})}
						/>
						<label htmlFor="mañana" className="radio-button-label">
							Mañana(de 8 a 12 hs)
						</label>
					</div>
					<div>
						<input
							value="tarde"
							type="radio"
							{...register('time', {
								required: 'Campo requerido',
							})}
							id="tarde"
							className="peer hidden"
							defaultChecked
						/>
						<label htmlFor="tarde" className="radio-button-label">
							Tarde(de 13 a 17 hs)
						</label>
					</div>
					<div>
						<input
							value="noche"
							type="radio"
							{...register('time', {
								required: 'Campo requerido',
							})}
							id="noche"
							className="peer hidden"
							defaultChecked
						/>
						<label htmlFor="noche" className="radio-button-label">
							Noche(de 18 a 22 hs)
						</label>
					</div>
				</div> */}

				<hr />
				<Button className="  w-fit" type="submit">
					Continua con la compra
				</Button>
			</form>
		</section>
	);
}

export default ServiceSelection;
