import LandingLayout from '../components/layout/LandingLayout';
import Home from '../pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';

function Router() {
	return (
		<>
			{/* Si consideran que esto se puede hacer de otra manera, cambien a su gusto sin problema, es solo la estructura inicial para ir dejando algo */}
			<BrowserRouter>
				{/* Nav & Footer en un principio quedan afuera porque son componentes que se comparten en la mayoria en las pages. */}
				<Routes>
					<Route path="/" element={<LandingLayout />}>
						<Route index element={<Home />} />
						<Route path="/login" element={<div> Login</div>} />
						<Route path="/register" element={<div>Register</div>} />
					</Route>
					<Route
						path="whatever"
						element={<div> Agregar lo que se necesite</div>}
					/>
					<Route
						path="whatever"
						element={<div> Agregar lo que se necesite</div>}
					/>
					<Route
						path="whatever/:id"
						element={<div> Page con datos dinamicos</div>}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default Router;
