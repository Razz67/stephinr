import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const SideNav = () => {
	const [open, setOpen] = useState(false);
	const handleToggle = () => setOpen(!open);

	return (
		<>
			<div onClick={handleToggle} className="block md:hidden">
				{open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			<ul
				className={
					open
						? "fixed text-white left-0 top-0 w-[60%] border-r ease-in-out duration-500  border-r-gray-900 h-full bg-[#000300]"
						: "fixed left-[-100%]"
				}
			>

				<h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">
					Stephin R.
				</h1>

				<li className="p-4 border-b border-gray-600">Home</li>
				<li className="p-4 border-b border-gray-600">About</li>
				<li className="p-4 border-b border-gray-600">Projects</li>
				<li className="p-4">Contact</li>
			</ul>
		</>
	);
};

export default SideNav;
