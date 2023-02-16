import { ReactElement, useState } from 'react';
import hero_img from '@assets/hero_img.png';
import Input from '@components/shared/Input';

function StartNow(): ReactElement {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	return (
		<section>
			<div className="container flex py-8 md:py-24 md:flex-row flex-col items-center justify-between gap-12">
				<div className="order-1 md:order-none md:w-1/2  flex flex-col gap-8 w-full">
					<h2 className="heading2 font-semibold">Empieza ahora</h2>

					<form className="flex w-full flex-col gap-4 ">
						<Input
							name="firstName"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="Nombre"
						/>
						<Input
							name="lastName"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							placeholder="Apellido"
						/>
						<Input
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Correo"
						/>
					</form>

					<button className="md:block w-full text-white bg-royalBlue border-0 py-2 px-6 focus:outline-none hover:bg-royalBlue-600 rounded-[100px] text-lg text-center">
						Registrarse
					</button>
				</div>
				<div className="md:w-1/2 w-5/6">
					<img
						className="object-cover object-center"
						alt="start"
						src="https://www.supercleanss.com/imgs/nosotros.png"
					/>
				</div>
			</div>
		</section>
	);
}

export default StartNow;
