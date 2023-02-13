import { ReactElement } from 'react';

function Hero(): ReactElement {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className=" sm:text-7xl text-3xl mb-4  text-gray-900 ">
						Olvídate de limpiar por un momento🧹💧
					</h1>
					<p className="mb-8 leading-relaxed text-2xl">
						Con
						<span className=" text-customViolet font-semibold">
							{' '}
							DustBusters
						</span>
						, contrata a un limpiador por el tiempo que necesites
					</p>
					<div className="flex justify-center">
						<button className="inline-flex text-white bg-royalBlue border-0 py-2 px-6 focus:outline-none hover:bg-royalBlue-600 rounded text-lg">
							Buscar Servicio
						</button>
						{/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
							Iniciar sesión
						</button> */}
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src="https://www.supercleanss.com/imgs/hero%20img.png"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
