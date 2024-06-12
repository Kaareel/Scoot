import { useState } from "react";
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-white md:m-auto md:flex md:justify-start md:items-center md:max-width-[1440px]">
			<div className="container mx-auto flex items-center p-5 md:px-40 md:py-6">
				<div className="md:hidden">
					<button
						type="button"
						onClick={toggleMenu}
						className=" text-textPrimary  hover:outline-none"
					>
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
							></path>
						</svg>
					</button>
				</div>
				<div className="m-auto md:w-[222px]">
					<a href=" " className=" outline-none">
						<img src="./logo.svg" alt="logo" />
					</a>
				</div>
				<div className="hidden md:flex lg:flex ">
					<ul className="flex lg:flex-1 lg:flex-grow-1 lg:flex-shrink-1 lg:w-[20%] justify-between items-center">
						<li className="mb-0">
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="#"
								className="flex items-center text-textPrimary style-nav rounded"
							>
								About
							</a>
						</li>
						<li className="mb-0">
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="#"
								className="flex items-center text-textPrimary  rounded"
							>
								Location
							</a>
						</li>
						<li className="mb-0">
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="#"
								className="flex items-center text-textPrimary  rounded"
							>
								Careers
							</a>
						</li>
					</ul>

					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a
						href="#"
						className="bg-customOrange border-4 hover:border-2 border-transparent text-white px-12 py-3 mt-4 style rounded"
					>
						Get Scootin
					</a>
				</div>
				<div></div>
			</div>
			{isOpen && (
				<div className="md:hidden flex flex-col top-0 z-[1] bg-colorThird pt-16 pl-9 left-0  w-2/3 h-[49vh]">
					<div className="flex flex-col flex-grow">
						<ul>
							<li>
								{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
								<a href="#" className="block text-white rounded">
									About
								</a>
							</li>
							<li>
								{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
								<a href="#" className="block text-white rounded">
									Location
								</a>
							</li>
							<li>
								{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
								<a href="#" className="block text-white rounded">
									Careers
								</a>
							</li>
						</ul>
					</div>
					<div>
						{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
						<a
							href="#"
							className="bg-customOrange border-4 border-transparent text-white px-12 py-3 rounded"
						>
							Get Scootin
						</a>{" "}
					</div>{" "}
					{/* Este div ocupará todo el espacio disponible */}
				</div>
			)}
		</nav>
	);
}

export default Navbar;
