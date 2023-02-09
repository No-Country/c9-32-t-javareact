import { Footer, Nav } from './components/layout';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Nav />
			<main className="flex-auto max-w-7xl mx-auto">
				<Home />
			</main>
			<Footer />
		</>
	);
}

export default App;
