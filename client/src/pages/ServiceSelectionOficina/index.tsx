import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { useGlobalData } from '@context/GlobalContext';
import { useForm } from 'react-hook-form';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { createUserSchedule } from '@api/service-schedule';
import servicesData from '@/utils/data.json';
import { IServiceStorage } from '@/types';
import { useState } from 'react';

type FormValues = {
	programDate: string;
	time: string;
};
function ServiceSelectionOficina() {
	const navigator = useNavigate();
	const { userLocation, userData } = useGlobalData();
	const [cost, setCost] = useState<number>(1200);

	const serviceType = 'oficina';
	const {
		register,
		reset,
		watch,
		handleSubmit,
		getValues,
		formState: { errors, isValid },
	} = useForm<any>({
		mode: 'onChange',
	});
	const serviceLocal = servicesData.services.find(
		(service) => service.serviceType === serviceType,
	);

	async function onSubmit(data: IServiceStorage) {
		console.log(data);
		try {
			localStorage.setItem(
				'SERVICE_DATA',
				JSON.stringify({
					options: data,
					servType: 'oficina',
					cost: cost,
				}),
			);
			navigator('/payment');

			/* const payload = {
				...data,
				status: 'Pending',
				servType: {
					type: serviceType,
				},
				user: {
					email: userData?.email,
				},
			}; */
			/* const response = await createUserSchedule(payload);
			console.log(response); */
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<section className="flex flex-col justify-center items-center text-center lg:flex-row gap-12 lg:items-start">
			<div className="lg:w-1/3 flex flex-col gap-8 mt-12">
				<h3 className="heading2 mb-1 text-left">
					Servicio de {serviceType}
				</h3>
				<p className=" text-left">
					{userData?.name}, para oficinas podríamos hacerlo por
					cantidad de oficinas o puestos de trabajo y las medidas de
					ellas. Vi en internet que el tamaño mínimo de las oficinas
					es de 14 m2 y 3.5 m2 por puesto de trabajo, ejemplo:
				</p>
				<img
					className="hidden lg:block h-1/2 w-full object-cover rounded-lg"
					src={`/${serviceLocal?.src}`}
					alt={serviceType}
				/>
				<span className="font-black text-2xl flex items-center text-royalBlue">
					${' '}
					<span className="text-lg font-medium  ml-2 text-black mt-1">
						{cost}
					</span>
				</span>
			</div>
			<form
				className="flex flex-col gap-4 w-full lg:w-1/2 mx-auto lg:mt-12 mb-6"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="clean-container">
					<p className="w-full">Selecciona la cantidad de oficinas </p>
					<div className="clean-container lg:flex-row">
						<div className="input-radio-container">
							<input
								type="radio"
								id="1"
								className="peer hidden"
								value="pequeño"
								defaultChecked
								{...register('rooms', {
									required: 'Campo requerido',
								})}
							/>
							<label htmlFor="pequeño" className="button-custom">
								1 a 3
							</label>
						</div>
						<div className="input-radio-container">
							<input
								value="4"
								type="radio"
								{...register('rooms', {
									required: 'Campo requerido',
								})}
								id="4"
								className="peer hidden"
							/>
							<label htmlFor="4" className="button-custom">
								4 a 10
							</label>
						</div>
						<div className="input-radio-container">
							<input
								value="10"
								type="radio"
								{...register('rooms', {
									required: 'Campo requerido',
								})}
								id="10"
								className="peer hidden"
							/>
							<label htmlFor="10" className="button-custom">
								Mas de 10
							</label>
						</div>
					</div>
				</div>
				<div className="clean-container">
					<p className="w-full">Selecciona el tamaño de oficina </p>
					<div className="clean-container lg:flex-row">
						<div className="input-radio-container">
							<input
								type="radio"
								id="pequeño"
								className="peer hidden"
								value="pequeño"
								defaultChecked
								{...register('size', {
									required: 'Campo requerido',
								})}
							/>
							<label htmlFor="pequeño" className="button-custom">
								Pequeño(20 m²)
							</label>
						</div>
						<div className="input-radio-container">
							<input
								value="mediano"
								type="radio"
								{...register('size', {
									required: 'Campo requerido',
								})}
								id="mediano"
								className="peer hidden"
							/>
							<label htmlFor="mediano" className="button-custom">
								Mediano(100 m²)
							</label>
						</div>
						<div className="input-radio-container">
							<input
								value="grande"
								type="radio"
								{...register('size', {
									required: 'Campo requerido',
								})}
								id="grande"
								className="peer hidden"
							/>
							<label htmlFor="grande" className="button-custom">
								Grande(150 m²)
							</label>
						</div>
					</div>
				</div>
				<hr className="" />
				<div className="clean-container">
					<p className="w-full">
						Selecciona el turno para la limpieza
					</p>
					<div className="clean-container lg:flex-row">
						<div className="input-radio-container">
							<input
								type="radio"
								id="mañana"
								className="peer hidden"
								value="mañana"
								defaultChecked
								{...register('workday', {
									required: 'Campo requerido',
								})}
							/>
							<label htmlFor="mañana" className="button-custom">
								Mañana(de 8 a 12 hs)
							</label>
						</div>
						<div className="input-radio-container">
							<input
								value="tarde"
								type="radio"
								{...register('workday', {
									required: 'Campo requerido',
								})}
								id="tarde"
								className="peer hidden"
							/>
							<label htmlFor="tarde" className="button-custom">
								Tarde(de 13 a 17 hs)
							</label>
						</div>
						<div className="input-radio-container">
							<input
								value="noche"
								type="radio"
								{...register('workday', {
									required: 'Campo requerido',
								})}
								id="noche"
								className="peer hidden"
							/>
							<label htmlFor="noche" className="button-custom">
								Noche(de 18 a 22 hs)
							</label>
						</div>
					</div>
				</div>
				<hr className="" />
				<div className="clean-container">
					<p className="w-full">
						Selecciona la cantidad de limpiezas
					</p>
					<p className=" text-xs">
						Puedes optar por una limpieza unica o una limpieza
						programada
					</p>
					<div className="input-radio-container">
						<input
							type="radio"
							id="unica"
							className="peer hidden"
							value="unica"
							defaultChecked
							{...register('period', {
								required: 'Campo requerido',
							})}
						/>
						<label htmlFor="unica" className="button-custom">
							Limpieza única
						</label>
					</div>
					<div className="text-xs">
						o
						<hr />
						Limpieza programada
					</div>

					<div className="clean-container lg:flex-row">
						<div className="input-radio-container">
							<input
								value="2/semana"
								type="radio"
								{...register('period', {
									required: 'Campo requerido',
								})}
								id="2/semana"
								className="peer hidden"
							/>
							<label htmlFor="2/semana" className="button-custom">
								2 veces por semana
							</label>
						</div>
						<div className="input-radio-container">
							<input
								value="3/semana"
								type="radio"
								{...register('period', {
									required: 'Campo requerido',
								})}
								id="3/semana"
								className="peer hidden"
							/>
							<label htmlFor="3/semana" className="button-custom">
								3 veces por semana
							</label>
						</div>
						<div className="input-radio-container">
							<input
								value="diario"
								type="radio"
								{...register('period', {
									required: 'Campo requerido',
								})}
								id="diario"
								className="peer hidden"
							/>
							<label htmlFor="diario" className="button-custom">
								Todos los días
							</label>
						</div>
					</div>
				</div>
				{/* <Input
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
				/> */}

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
						<label htmlFor="mañana" className="button-custom">
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
						<label htmlFor="tarde" className="button-custom">
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
						<label htmlFor="noche" className="button-custom">
							Noche(de 18 a 22 hs)
						</label>
					</div>
				</div> */}

				<hr />
				<Button className="  w-fit" type="submit">
					Continua con la compra{' '}
					<span className="ml-2 text-xs">${cost}</span>
				</Button>
			</form>
		</section>
	);
}

export default ServiceSelectionOficina;
