import Router from './utils/Router';
import { GlobalProvider } from '@context/GlobalContext';

import moment from 'moment';
import 'moment/dist/locale/es';
moment().locale();

function App() {
	return (
		<GlobalProvider>
			<Router />
		</GlobalProvider>
	);
}

export default App;
