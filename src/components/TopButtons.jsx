import React from "react";

export default function TopButtons({ setQuery }) {
	const cities = [
		{
			id: 1,
			title: "New York",
		},
		{
			id: 2,
			title: "Sydney",
		},
		{
			id: 3,
			title: "Delhi",
		},
		{
			id: 4,
			title: "Seoul",
		},

		{
			id: 5,
			title: "London",
		},
	];
	return (
		<div className="flex items-center justify-around my-6 ">
			{cities.map((city) => (
				<button
					key={city.id}
					className="text-white text-lg font-medium py-2 px-4 transition ease-out hover:scale-125"
					onClick={() => setQuery({ q: city.title })}
				>
					{city.title}
				</button>
			))}
		</div>
	);
}
