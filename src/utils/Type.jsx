import React from 'react'
import Typed from 'react-typed'

const Type = () => {
  return (
		<Typed
			className="text-xl md:text-4xl text-slate-100 md:pl-4 pl-2 font-bold"
			strings={[
				"React JS",
				"HTML5",
				"TailwindCSS",
				"JavaScript",
				"Semantic Markup",
			]}
			typeSpeed={90}
			backSpeed={40}
			loop
		/>
	);
}

export default Type