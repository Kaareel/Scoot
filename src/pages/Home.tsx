import { IconLocate, IconRide } from "../utils/Icon";

function Home() {
	return (
		<>
			<header>
				<div className="h-screen">
					<div className="absolute ">
						<img src="./images/home-hero-mobile.jpg" alt="foto" />
						<div className="absolute px-8 top-[100px] m-auto">
							<h1 className=" text-center text-5xl font-bold text-white leading-[1.2]">
								Scooter sharing made simple
							</h1>
							<p className="text-center text-white mt-4 mb-8">
								Scoot takes the hassle out of urban mobility. Our bikes are
								placed in convenient locations in each of our cities. Use our
								app to locate the nearest bike, unlock it with a tap, and you’re
								away!
							</p>
							<div className="flex justify-center">
								{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
								<a
									href="#"
									className="bg-customOrange border-4 hover:border-2 border-transparent text-white px-12 py-3 mt-4 style rounded"
								>
									Get Scootin
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="cards">
				<div className="flex flex-col justify-center mb-16">
					<IconLocate />
					<div className="text-center">
						<h1 className="text-textSecondary mt-4 text-xl">Locate with app</h1>
						<p className="text-textPrimary text-sm mt-8">
							Use the app to find the nearest scooter to you. We are
							continuously placing scooters in the areas with most demand, so
							one should never be too far away.
						</p>
					</div>
				</div>
				<div>
					<div className="flex flex-col justify-center mb-16">
						<IconRide />
						<div className="text-center">
							<h1 className="text-textSecondary mt-4 text-xl">
								Enjoy the ride
							</h1>
							<p className="text-textPrimary text-sm mt-8">
								We show the most important info for the scooters closest to
								you.So you know how much charge they have left and can see
								roughly how much it will cost.
							</p>
						</div>
					</div>
				</div>
				<div className="mb-16">
					<img
						src="./images/telemetry.jpg"
						alt="telemetry"
						className="rounded-full"
					/>
					<div className="text-center">
						<h1 className="text-textSecondary mt-4 text-xl leading-[1.1] tracking-[-1.43px]">
							Easy to use riding telemetry
						</h1>
						<p className="text-textPrimary text-sm mt-8">
							The Scoot app is available with riding telemetry. This means it
							can show you your average speed, how long you've been using the
							scooter, your traveling distance, and many more things all in an
							easy to use app.
						</p>
						<div className="mt-12">
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="#"
								className="bg-customOrange border-4 hover:border-2 border-transparent text-white px-12 py-3 style rounded"
							>
								Learn more
							</a>
						</div>
					</div>
				</div>
				<div className="mb-16">
					<img src="./images/near-you.jpg" alt="" className="rounded-full" />
					<div className="text-center">
						<h1 className="text-textSecondary mt-4 text-xl leading-[1.1] tracking-[-1.43px]">
							Zero hassle payments
						</h1>
						<p className="text-textPrimary text-sm mt-8">
							Our payment is as easy as one two three. We accept most credit
							cards and debit cards. You can also link your PayPal account
							inside the app. Need to pay later? No worries! You can defer
							payment for up to a month.
						</p>
						<div className="mt-12">
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="#"
								className="bg-customOrange border-4 hover:border-2 border-transparent text-white px-12 py-3 style rounded"
							>
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>
			<aside>
				<div className="aside">
					<div>
						<h1 className="text-center text-4xl pb-12 font-bold text-white leading-[1.1] tracking-[-1.43px]">
							Sign up and Scoot off today
						</h1>
						<ul className="flex gap-4">
							<li>
								{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
								<a href="#">
									<img src="./images/google-play.svg" alt="google-play" />
								</a>
							</li>
							<li>
								{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
								<a href="#">
									<img src="./images/app-store.svg" alt="app-store" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</aside>
			<footer>
				<div className="bg-colorThird p-14">
					<ul className="flex flex-col items-center gap-6">
						<li>
							<img src="./logo.svg" alt="logo" />
						</li>
						<li>
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a href="#" className="block style-nav text-white rounded mb-4">
								About
							</a>
						</li>
						<li>
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a href="#" className="block style-nav text-white rounded mb-4">
								Location
							</a>
						</li>
						<li>
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a href="#" className="block style-nav text-white rounded mb-4">
								Careers
							</a>
						</li>
					</ul>
					<ul className="flex justify-evenly mt-6">
						<li>
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a href="#">
								<img src="./icon/facebook.svg" alt="Facebook" />
							</a>
						</li>
						<li>
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a href="#">
								<img src="./icon/twitter.svg" alt="twitter" />
							</a>
						</li>
						<li>
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a href="#">
								<img src="./icon/instagram.svg" alt="instagram" />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}

export default Home;
