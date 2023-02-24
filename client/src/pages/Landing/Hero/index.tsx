import { ReactElement } from 'react';
import { Button } from '@/components/shared/Button';
import hero_img from '@assets/hero_img.png';
import { Link } from 'react-router-dom';

function Hero(): ReactElement {
	return (
		<section className="text-gray-600 body-font">
			<div className="  flex py-8 md:py-24 md:flex-row flex-col items-center justify-between">
				<div className="order-1 md:order-none  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="sm:text-6xl text-4xl mb-10  text-gray-900 font-bold ">
						Olvídate de limpiar por un momento
					</h1>
					<p className="mb-10 leading-relaxed text-xl md:text-2xl">
						Con
						<span className=" text-customViolet font-semibold">
							{' '}
							DustBusters
						</span>
						, contrata a un limpiador por el tiempo que necesites
					</p>
					<div className="flex justify-start md:flex-row flex-col w-full gap-4">
						<Button classes="hidden md:block">Ver Servicios</Button>
						<Button
							element={Link}
							to="/login"
							classes="md:hidden  "
						>
							Iniciar sesión
						</Button>
						<Button
							element={Link}
							to="/register"
							classes="md:hidden w-full  "
						>
							Registrarse
						</Button>
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
