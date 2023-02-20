import Router from './utils/Router';
import GlobalContext from './context/GlobalContext';


function App() {
	
	return (
		<GlobalContext.Provider value={{}}>
			<Router />
		</GlobalContext.Provider>
	);
}

export default App;
