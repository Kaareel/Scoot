import { BasiCard } from "../components/Cards";
import { Aside, Footer, Header } from "../utils/Helpers";

function Locations() {
	return (
		<>
		<Header
		image="./images/careers-location-hero-mobile.jpg"
		title="Location"
		/>
			<main className="pt-40 px-8 pb-8">
				<div className="m-auto px-8 pb-8 relative">
					<img src="./images/world-map-mobile.png" alt="world-map-mobile" />
				</div>
				<div>
					<div className=" mb-4 bg-[#fff4df] text-center p-4">
						<h2>New York</h2>
					</div>
					<div className=" mb-4 bg-[#fff4df] text-center p-4">
						<h2>London</h2>
					</div>
					<div className=" mb-4 bg-[#fff4df] text-center p-4">
						<h2>Yokohama</h2>
					</div>
					<div className=" mb-4 bg-[#fff4df] text-center p-4">
						<h2>Jakarta</h2>
					</div>
				</div>
				<div className="">
					<BasiCard
					title="Your city not listed?"
					text="If you’d like to see Scoot in your hometown, be sure to let us know.
						We track requests and plan launches based on demand. Feel free to
						message us by clicking the link or messaging us on social."
					button="Message"/>
				</div>
			</main>
			<Aside/>
			<Footer/>
		</>
	);
}

export default Locations;
