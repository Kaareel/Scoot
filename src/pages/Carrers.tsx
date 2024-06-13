import { Aside, Footer } from "../utils/Helpers";

function Careers() {
	return (
		<>
			<header>
				<div className="pb-40">
					<img
						src="./images/careers-location-hero-mobile.jpg"
						alt="careers-location-hero-mobile"
						className="absolute"
					/>
					<h1 className="relative text-center top-[3.2rem] px-8 text-[40px] leading-[1.2] text-white">
						Careers
					</h1>
				</div>
			</header>
			<div className="px-8">
				<div className="text-center">
					<img
						src="./images/join-us.jpg"
						alt="join-us"
						className="rounded-full"
					/>
					<div className="my-12">
						<h2 className="text-4xl font-bold text-textSecondary tracking-[-1.43px] leading-[1.2]">
							Care to join our mission
						</h2>
						<p className="mt-6 text-sm text-textPrimary">
							We’re always looking for ambitious individuals to help us on our
							journey. If you’re passionate about our mission to provide clean,
							accessible transport to improve urban living we want to hear from
							you!
						</p>
						<div className="my-12">
							<a
								// biome-ignore lint/a11y/useValidAnchor: <explanation>
								href="#"
								className="bg-customOrange border-4 hover:border-2 border-transparent text-white px-12 py-3 mt-4 style rounded"
							>
								Say Hello
							</a>
						</div>
					</div>
				</div>
				<div className="mt-28 mb-20 px-8">
					<h1 className="text-center text-4xl font-bold tracking-[-1.43px] text-textSecondary">
						Our values
					</h1>
					<div className="mt-28">
						<div className="text-center mb-16">
							<div className="flex flex-col justify-center items-center relative">
								<div className="flex flex-col">
									<div className=" mb-20 -mt-10 relative">
										<p className="flex justify-center items-center absolute left-2/4 z-[1] -bottom-12 -ml-12 bg-customOrange rounded-full w-24 h-24">
											01
										</p>
										<img
											src="./images/our-tech.jpg"
											alt="our-tech"
											className="rounded-full block w-full"
										/>
									</div>
									<h1 className="text-center text-textSecondary text-xl mt-4">
										Our tech
									</h1>
									<p className="text-center text-textPrimary text-sm mt-8">
										We’re using cutting edge technology to drive accessible
										urban transportation forward. Our fully electric scooters
										are a joy to ride!
									</p>
								</div>
							</div>
							<div className="mt-28">
								<div className="text-center mb-16">
									<div className="flex flex-col justify-center items-center relative">
										<div className="flex flex-col">
											<div className=" mb-20 -mt-10 relative">
												<p className="flex justify-center items-center absolute left-2/4 z-[1] -bottom-12 -ml-12 bg-customOrange rounded-full w-24 h-24">
													02
												</p>
												<img
													src="./images/our-integrity.jpg"
													alt="our-integrity"
													className="rounded-full block w-full"
												/>
											</div>
											<h1 className="text-center text-textSecondary text-xl mt-4">
												Our integrity
											</h1>
											<p className="text-center text-textPrimary text-sm mt-8">
												{" "}
												We are fully committed to deliver a great yet safe,
												sustainable micro-mobility experience in every city we
												serve.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-28">
								<div className="text-center mb-16">
									<div className="flex flex-col justify-center items-center relative">
										<div className="flex flex-col">
											<div className=" mb-20 -mt-10 relative">
												<p className="flex justify-center items-center absolute left-2/4 z-[1] -bottom-12 -ml-12 bg-customOrange rounded-full w-24 h-24">
													03
												</p>
												<img
													src="./images/our-community.jpg"
													alt="our-community"
													className="rounded-full block w-full"
												/>
											</div>
											<h1 className="text-center text-textSecondary text-xl mt-4">
												Our community
											</h1>
											<p className="text-center text-textPrimary text-sm mt-8">
												{" "}
												We support every community we serve. All workers are
												paid a living wage based on their location and are Scoot
												employees.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-5 mt-28 mb-20 py-8">
					<div className="bg-accordionColor flex flex-col justify-center items-center py-8 gap-2">
						<div>
							<h2 className="text-textSecondary text-lg">General Manager</h2>
							<p className="text-textSecondary text-sm p-2">
								Jakarta, Indonesia
							</p>
						</div>
						<a
							// biome-ignore lint/a11y/useValidAnchor: <explanation>
							href="#"
							className="bg-customOrange text-center border-4 hover:border-2 border-transparent text-white font-bold p-3 mt-4 style rounded w-60 max-w-[90%]"
						>
							Apply
						</a>
					</div>
					<div className="bg-accordionColor flex flex-col justify-center items-center py-8 gap-2">
						<div>
							<h2 className="text-textSecondary text-lg">UI/UX Designer</h2>
							<p className="text-textSecondary text-sm p-2">Yokohama, Japan</p>
						</div>
						<a
							// biome-ignore lint/a11y/useValidAnchor: <explanation>
							href="#"
							className="bg-customOrange text-center border-4 hover:border-2 border-transparent text-white font-bold p-3 mt-4 style rounded w-60 max-w-[90%]"
						>
							Apply
						</a>
					</div>
					<div className="bg-accordionColor flex flex-col justify-center items-center py-8 gap-2">
						<div>
							<h2 className="text-textSecondary text-lg">
								Blog Content Copywriter
							</h2>
							<p className="text-textSecondary text-sm p-2">
								New York, United States
							</p>
						</div>
						<a
							// biome-ignore lint/a11y/useValidAnchor: <explanation>
							href="#"
							className="bg-customOrange text-center border-4 hover:border-2 border-transparent text-white font-bold p-3 mt-4 style rounded w-60 max-w-[90%]"
						>
							Apply
						</a>
					</div>
					<div className="bg-accordionColor flex flex-col justify-center items-center py-8 gap-2">
						<div>
							<h2 className="text-textSecondary text-lg">Graphic Designer</h2>
							<p className="text-textSecondary text-sm p-2">
								New York, United States
							</p>
						</div>
						<a
							// biome-ignore lint/a11y/useValidAnchor: <explanation>
							href="#"
							className="bg-customOrange text-center border-4 hover:border-2 border-transparent text-white font-bold p-3 mt-4 style rounded w-60 max-w-[90%]"
						>
							Apply
						</a>
					</div>
					<div className="bg-accordionColor flex flex-col justify-center items-center py-8 gap-2">
						<div>
							<h2 className="text-textSecondary text-lg">Fleet Supervisor</h2>
							<p className="text-textSecondary text-sm p-2">
								Jakarta, Indonesia
							</p>
						</div>
						<a
							// biome-ignore lint/a11y/useValidAnchor: <explanation>
							href="#"
							className="bg-customOrange text-center border-4 hover:border-2 border-transparent text-white font-bold p-3 mt-4 style rounded w-60 max-w-[90%]"
						>
							Apply
						</a>
					</div>
					<div className="bg-accordionColor flex flex-col justify-center items-center py-8 gap-2">
						<div>
							<h2 className="text-textSecondary text-lg">UX Analyst</h2>
							<p className="text-textSecondary text-sm p-2">
								London, United Kingdom
							</p>
						</div>
						<a
							// biome-ignore lint/a11y/useValidAnchor: <explanation>
							href="#"
							className="bg-customOrange text-center border-4 hover:border-2 border-transparent text-white font-bold p-3 mt-4 style rounded w-60 max-w-[90%]"
						>
							Apply
						</a>
					</div>
				</div>
			</div>
			<Aside/>
			<Footer/>
		</>
	);
}

export default Careers;
