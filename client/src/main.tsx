import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalContext from './context/GlobalContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<GlobalContext.Provider value={{}}>
		<App />
	</GlobalContext.Provider>,
);
