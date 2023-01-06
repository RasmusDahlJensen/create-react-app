// import './App.scss';
import { Header } from "./components/partials/Header/Header";
import { Nav } from "./components/partials/Nav/Nav";
import { Footer } from "./components/partials/Footer/Footer";
import { Main } from "./components/partials/Main/Main";

function App() {
	return (
		<div className="App">
			<Header title="React Title" />
			<div className="mainFlex">
				<Nav />
				<Main />
			</div>
			<Footer />
		</div>
	);
}

export default App;
