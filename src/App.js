// import { About } from './About/About';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { ContenedorCursos } from './ContenedorCursos/ContenedorCursos';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header />
			{/* <About /> */}
			<ContenedorCursos />
		</div>
	);
}

export default App;
