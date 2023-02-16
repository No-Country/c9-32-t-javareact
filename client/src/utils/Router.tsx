import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingLayout from '@/components/layout/Landing';

import { LogIn, Register } from '@/components/Forms';
import LandingPage from '@/pages/Landing/Landing';
import NotFound from '@/pages/NotFound';


function Router() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingLayout />}>
						<Route index element={<LandingPage />} />
						<Route path="/login" element={<LogIn />} />
						<Route path="/register" element={<Register />} />
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
