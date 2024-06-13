import About from "./pages/About";
import Careers from "./pages/Carrers";
import Home from "./pages/Home";
import Locations from "./pages/Location";
import Navbar from "./utils/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
				<Route path="/home" Component={Home} />
				<Route path="/about" Component={About} />
				<Route path="/locations" Component={Locations} />
				<Route path="/careers" Component={Careers} />
				</Routes>

			</div>
		</Router>
	);
}

export default App;
