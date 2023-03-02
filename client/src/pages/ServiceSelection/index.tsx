import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { useGlobalData } from '@context/GlobalContext';
import { useForm } from 'react-hook-form';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { createUserSchedule } from '@api/service-schedule';
import servicesData from '@/utils/data.json';
import { ChevronLeft } from '@mui/icons-material';
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
		<section className=" w-full flex flex-col justify-center items-center text-center mt-10 gap-5 divide-y-[1px]">
			<ServiceSelectionHero
				title={`Limpieza de ${serviceType}`}
				text={defaultText}
			/>
			<CleanType />
			<CleanSize />
			<CleanTime />
			<CleanFrecuency />

			<Button className="  w-fit" type="submit">
				<div className="flex items-center justify-center">
					Continua con la compra
					<i className="material-icons text-2xl  text-white ml-2">
						chevron_right
					</i>
				</div>
			</Button>
		</section>
	);
}

export default ServiceSelection;
