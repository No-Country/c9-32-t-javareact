import Router from './utils/Router';
import { GlobalProvider } from '@context/GlobalContext';

function App() {
	return (
		<GlobalProvider>
			<Router />
		</GlobalProvider>
	);
}

export default App;
