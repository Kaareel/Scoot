import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
		event.preventDefault();
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className=" bg-white p-6 flex justify-start items-end">
			<div className="container mx-auto flex items-center  md:px-40 md:py-6">
				<div className="md:hidden relative z-10">
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
					<Link to="/home" className=" outline-none">
						<img src="./logo.svg" alt="logo" />
					</Link>
				</div>
				<div className="hidden md:flex lg:flex ">
					<ul className="flex lg:flex-1 lg:flex-grow-1 lg:flex-shrink-1 lg:w-[20%] justify-between items-center">
						<li className="mb-0">
							<Link to="/about" className="flex items-center text-textPrimary style-nav rounded">About</Link>
						</li>
						<li className="mb-0">
							<Link to="/Locations" className="flex items-center text-textPrimary style-nav rounded">Locate</Link>
						</li>
						<li className="mb-0">
							<Link to="/Careers" className="flex items-center text-textPrimary style-nav rounded">Carrers</Link>
						</li>
					</ul>
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a
						href="#"
						onClick={(e) => handleScroll(e, 'signupSection')}
						className="bg-customOrange border-4 hover:border-2 border-transparent text-white px-12 py-3 mt-4 style rounded"
					>
						Get Scootin
					</a>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden absolute flex flex-col top-20 z-[1] bg-colorThird pt-16 pl-9 left-0  w-[68%] h-[49vh] items-baseline justify-between">
					<div className="flex flex-col flex-grow">
						<ul>
							<li className="mb-0">
								<Link to="/about" className="flex items-center text-textPrimary style-nav rounded">About</Link>
							</li>
							<li className="mb-0">
								<Link to="/locations" className="flex items-center text-textPrimary style-nav rounded">Locate</Link>
							</li>
							<li className="mb-0">
								<Link to="/careers" className="flex items-center text-textPrimary style-nav rounded">Carrers</Link>
							</li>
						</ul>
					</div>
					<div>

						{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
						<a
							href="#"
							onClick={(e) => handleScroll(e, 'signupSection')}
							className="bg-customOrange border-4 border-transparent text-white px-12 py-3 rounded"
						>
							Get Scootin
						</a>
					</div>

				</div>
			)}
		</nav>
	);
}

export default Navbar;
