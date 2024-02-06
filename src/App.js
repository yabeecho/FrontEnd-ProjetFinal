import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AppContainer } from './components/AppContainer.style';
import Home from './components/Home/Home';
import Inscription from './components/User/Inscription';
import Connexion from './components/User/Connexion';
import Support from './components/Support/Support';

function App() {
	return (
		<div className="App">
			<AppContainer>
				<Routes>
					<Route path='/' element={<Home />} />

					<Route>
						<Route path='/inscription' element={<Inscription />} />
						<Route path='/connexion' element={<Connexion />} />
					</Route>

					<Route>
						<Route path='/support' element={<Support />} />
						<Route />
						<Route />
						<Route />
						<Route />
					</Route>
				</Routes>
			</AppContainer>

		</div>
	);
}

export default App;