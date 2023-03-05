import Button from '@/components/shared/Button';
import { useGlobalData } from '@context/GlobalContext';
import { useForm } from 'react-hook-form';
import {  useParams, useNavigate } from 'react-router-dom';
import servicesData from '@/utils/data.json';
import ServiceSelectionHero from './ServiceSelectionHero';
import CleanType from './CleanType';
import CleanSize from './CleanSize';
import CleanTime from './CleanTime';
import CleanFrecuency from './CleanFrecuency';

type FormValues = {
	direction: string;
	programDate: string;
	time: string;
	tamaño: string;
};
function ServiceSelection() {
	const navigate = useNavigate()
	const goToPayment = () => {
			navigate("/payment")
	}

	const defaultText =
		'Nos especializamos en limpiar y organizar meticulosamente su hogar. Incluye tareas como quitar el polvo, aspirar, barrer, trapear, limpiar superficies y limpiar muebles y accesorios.';
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
	const serviceLocal = servicesData.services.find(
		(service) => service.serviceType === serviceType,
	);

	async function onSubmit(data: any) {
		console.log(data);
		try {
			const payload = {
				...data,
				status: 'Pending',
				servType: {
					type: serviceType,
				},
				user: {
					email: userData?.email,
				},
			};
			/* const response = await createUserSchedule(payload);
			console.log(response); */
		} catch (error) {
			console.log(error);
		}
		navigator('/payment');
	}

	return (
		<section className=" w-full flex flex-col justify-center items-center text-center mt-10 mb-20 gap-5 divide-y-[1px] lg:flex-row lg:items-start lg:divide-y-0 ">
		
			<ServiceSelectionHero
				title={`Limpieza de ${serviceType}`}
				text={defaultText}
			/>
			<div className='clean-container lg:w-1/2 divide-y-[1px] lg:divide-y-0'>
			<CleanType />
			<CleanSize />
			<CleanTime />
			<CleanFrecuency />

			<Button   classes='mt-5 lg:mt-10' type="submit">
				<div onClick={goToPayment}  className="flex w-full items-center justify-center ">
					Continúa con la compra
					<i className="material-icons text-2xl  text-white ml-2">
						chevron_right
					</i>
				</div>
			</Button>
			</div>
			
		</section>
	);
}

export default ServiceSelection;
