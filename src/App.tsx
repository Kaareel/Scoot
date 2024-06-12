import About from "./pages/About";
import Careers from "./pages/Carrers";
import Home from "./pages/Home";
import Locations from "./pages/Location";
import Navbar from "./utils/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<About/>
            <Careers/>
			<Locations/>
		</div>
	);
}

export default App;
