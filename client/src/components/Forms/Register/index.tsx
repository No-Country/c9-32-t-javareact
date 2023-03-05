import Header from './Header';
import RegisterForm from './RegisterForm';
import Terms from './Terms';
import Welcome from './Welcome';

const Register = () => {
	return (
		<>
			<Header />
			<main className="m-auto container">
				<Welcome />
				<RegisterForm />
				<Terms />
			</main>
		</>
	);
};
export default Register;
