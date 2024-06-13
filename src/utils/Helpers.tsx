import { useRef } from "react";

interface PropsHeader {
	image: string,
	title: string,
	description?: string,
	buttonText?: string,
}

export const Footer = () => {
	return (
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
	)
}

export const Aside = () => {
	return (
		<aside id="signupSection">
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
	)
}
export const HeaderButton = (props: PropsHeader) => {
	const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		const element = document.getElementById('signupSection');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<header className="relative">
			{/* biome-ignore lint/a11y/noRedundantAlt: <explanation> */}
			<img src={props.image} alt="image" className="" />
			<div className="absolute -top-[.3rem] w-full items-center">
				<div className="absolute px-8 top-[100px] m-auto">
					<h1 className=" text-center text-5xl font-bold text-white leading-[1.2]">
						{props.title}
					</h1>
					<p className="text-center text-white mt-4 mb-8">
						{props.description}
					</p>
					<div className="flex justify-center">
						{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
						<a
							href="#"
							onClick={handleScroll}
							className="bg-customOrange border-4 hover:border-2 border-transparent text-white px-12 py-3 mt-4 style rounded"
						>
							{props.buttonText}
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}
export const Header = (props: PropsHeader) => {
	return (
		<header className="relative">
			<div>
				<img
					src={props.image}
					alt="about-hero"
					className="absolute"
				/>
				<h1 className="relative text-center top-[3.2rem] px-8 text-[40px] leading-[1.2] text-white">
					{props.title}
				</h1>
			</div>
		</header>
	)
}