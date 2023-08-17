import React from "react";
import { iconUrlFromCode } from "../services/WeatherService";
function Forecast({ title, items }) {
	return (
		<div>
			<div className="flex items-center justify-start mt-6">
				<p className="text-white font-medium uppercase">{title}</p>
			</div>

			<hr className="my-2"></hr>
			<div className="flex flex-row items-center justify-between text-white">
				{items?.map((item) => {
					return (
						<div className="flex flex-col items-center justify-center">
							<p className="font-light text-sm">
								{item.title.slice(11, 16)}
							</p>

							<img
								src={iconUrlFromCode(item.icon)}
								className="w-12 my-1"
								alt="Temp"
							></img>
							<p className="font-medium">{`${Math.round(
								item.temp - 273
							)}°`}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Forecast;
