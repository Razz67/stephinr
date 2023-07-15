import React from "react";
import heroImage from "../images/me.png";
import Typed from "../utils/Type";

const Hero = () => {
	return (
		<section className="max-w-[800px] mx-auto text-slate-100 text-center flex flex-col justify-center mt-[-66px] md:mt-[-15px] md:mb-24 w-full h-screen">
			<img
				src={heroImage}
				alt="my photo"
				className="w-[50%] mx-auto p-4 mt-4 rounded-full object-cover"
			/>

			<h1 className="text-[#00DF9A] text-2xl font-bold mx-auto sm:text-5xl md:py-6 md:text-6xl">
				Growing With The Web
			</h1>
			<p className="text-xl md:text-2xl p-4">
				I am a freelance front-end developer focused on delivering a great
				user-experience. I am passionate about building websites in React JS
				that are clean, sophisticated, and easy to navigate. Let me help you
				build your dream website.
			</p>

			<div className="flex justify-center items-center py-4">
				<p className="text-xl  md:text-4xl font-bold">
					My passions:
					<Typed />
				</p>
			</div>
			<p className="text-xl md:text-2xl font-bold p-4">
				Let's Grow your <span className="text-[#00DF9A]">Brand</span>
			</p>
			<button className="text-black bg-[#00DF9A] w-[200px] mx-auto rounded-md font-medium my-2">
				Hire Me
			</button>
		</section>
	);
};

export default Hero;
