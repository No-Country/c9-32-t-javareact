import hero_img from '@assets/hero_img.png';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

function Hero(): ReactElement {
	const navigate = useNavigate();

	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex py-8 md:py-24 md:flex-row flex-col items-center justify-between">
				<div className="order-1 md:order-none  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className=" sm:text-6xl text-3xl mb-4  text-gray-900 font-medium">
						Olvídate de limpiar por un momento🧹💧
					</h1>
					<p className="mb-8 leading-relaxed text-xl md:text-2xl">
						Con
						<span className=" text-customViolet font-semibold">
							{' '}
							DustBusters
						</span>
						, contrata a un limpiador por el tiempo que necesites
					</p>
					<div className="flex justify-center md:flex-row flex-col w-full gap-4">
						<button className="hidden md:block w-full text-white bg-royalBlue border-0 py-2 px-6 focus:outline-none hover:bg-royalBlue-600 rounded-[100px] text-lg text-center">
							Buscar Servicio
						</button>
						<button className="md:hidden w-full text-white bg-royalBlue border-0 py-2 px-6 focus:outline-none hover:bg-royalBlue-600 rounded-[100px] text-lg text-center">
							Iniciar sesión
						</button>
						<button className="md:hidden w-full text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-[100px] text-lg text-center">
							Registrarse
						</button>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src={hero_img}
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
