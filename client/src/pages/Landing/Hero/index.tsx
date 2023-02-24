import Escoba from '@/components/icons/Escoba';
import hero_img from '@assets/hero_img.png';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

function Hero(): ReactElement {
	return (
		<section className="text-gray-600 body-font">
			<div className="  flex py-8 md:py-24 md:flex-row flex-col items-center justify-center">
				<div className="order-1 md:order-none  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className=" sm:text-6xl text-2xl mb-4  text-gray-900 font-medium ">
						Donde la limpieza se encuentra con la comodidad
					</h1>
					<p className="mb-8  leading-relaxed text-xl md:text-2xl">
						Reserva, relájate y disfruta
					</p>
					<div className="flex justify-center md:flex-row flex-col w-full gap-4">
						<button className="hidden md:block w-full text-white bg-royalBlue border-0 py-2 px-6 focus:outline-none hover:bg-royalBlue-600 rounded-[100px] text-lg text-center">
							Buscar Servicio
						</button>
						<Link
							to="/login"
							className="md:hidden w-full text-white bg-royalBlue  py-2 px-6 focus:outline-none hover:bg-royalBlue-600 rounded-full text-center"
						>
							Iniciar sesión
						</Link>
						<Link
							to="/register"
							className="md:hidden w-full text-customViolet  border-[2px] border-customViolet py-2 px-6 focus:outline-none rounded-full  text-center"
						>
							Registrarse
						</Link>
					</div>
				</div>
				<div className='mb-5' >
					<Escoba/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
