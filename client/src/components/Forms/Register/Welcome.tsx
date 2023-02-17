import { Link } from 'react-router-dom';
import logo from '@assets/logo.png';

const Welcome = () => {
	return (
		<div className="w-full  flex flex-col text-center items-center justify-center mt-5 ">
			<Link
				to="/"
				title="home"
				className="flex justify-center items-center gap-4"
			>
				<h1 className="text-4xl sm:text-5xl font-bold">DustBusters</h1>
				<img src={logo} className="w-14" />
			</Link>
			<span className="font-bold md:text-lg">¡Bienvenido!</span>
			<p className="leading-5 mg:text-lg">
				Crea tu cuenta hoy y haz tu vida mas fácil.
			</p>
		</div>
	);
};
export default Welcome;
