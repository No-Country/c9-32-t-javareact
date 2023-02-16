import Router from './utils/Router';
import GlobalContext from './context/GlobalContext';
import getAllUsers from './utils/functions/getUsers';

function App() {
	getAllUsers()
	return (
		<GlobalContext.Provider value={{}}>
			<Router />
		</GlobalContext.Provider>
	);
}

export default App;
