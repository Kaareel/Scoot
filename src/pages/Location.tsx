import { Aside, Footer } from "../utils/Helpers";

function Locations() {
	return (
		<>
			<header>
				<div>
					<img
						src="./images/careers-location-hero-mobile.jpg"
						alt="careers-location-hero-mobile"
						className="absolute"
					/>
					<h1 className="relative text-center top-[3.2rem] px-8 text-[40px] leading-[1.2] text-white">
						Location
					</h1>
				</div>
			</header>
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
				<div className=" mt-14 text-center px-16">
					<h1 className="text-4xl font-bold text-textSecondary tracking-[-1.43px] leading-[1.2]">
						Your city not listed?
					</h1>
					<p className="mt-6 text-sm text-textPrimary">
						If you’d like to see Scoot in your hometown, be sure to let us know.
						We track requests and plan launches based on demand. Feel free to
						message us by clicking the link or messaging us on social.
					</p>
					<div>
						<a
							// biome-ignore lint/a11y/useValidAnchor: <explanation>
							href="#"
							className="bg-customOrange border-4 hover:border-2 border-transparent text-white px-12 py-3 mt-4 style rounded"
						>
							Message
						</a>
					</div>
				</div>
			</main>
			<Aside/>
			<Footer/>
		</>
	);
}

export default Locations;
