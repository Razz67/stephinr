import React from "react";
import SideNav from "./SideNav";

const Navbar = () => {
	return (
		<header>
			<nav className="text-white flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto">
				<h1 className="text-[#00df9a] w-full text-4xl font-bold">Stephin R.</h1>
				<ul className="hidden md:flex ">
					<li className="p-4">Home</li>
					<li className="p-4">About</li>
					<li className="p-4">Projects</li>
					<li className="p-4">Contact</li>
				</ul>
				<SideNav />
			</nav>
		</header>
	);
};

export default Navbar;
