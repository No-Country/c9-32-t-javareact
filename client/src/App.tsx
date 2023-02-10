import { Footer, Nav } from './components/layout';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			{/* Si consideran que esto se puede hacer de otra manera, cambien a su gusto sin problema, es solo la estructura inicial para ir dejando algo */}
			<BrowserRouter>
				{/* Nav & Footer en un principio quedan afuera porque son componentes que se comparten en la mayoria en las pages. */}
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<div> Login</div>} />
					<Route path="/register" element={<div>Register</div>} />
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

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
