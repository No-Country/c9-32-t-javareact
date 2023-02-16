import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingLayout from '@/components/layout/Landing';

import LandingPage from '@pages/Landing';
import NotFound from '@/pages/NotFound';

function Router() {
	return (
		<>
			<BrowserRouter>
				
				<Routes>
					<Route path="/" element={<LandingLayout />}>
						<Route index element={<LandingPage />} />
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
