import React from "react";
import {
	UilArrowUp,
	UilArrowDown,
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from "@iconscout/react-unicons";
import { iconUrlFromCode } from "../services/WeatherService";

function TemperatureDetails({
	weather: {
		details,
		icon,
		temp,
		temp_min,
		temp_max,
		sunrise,
		sunset,
		speed,
		humidity,
		feels_like,
		timezone,
	},
}) {
	//sunrise
	var sunriseDate = new Date(sunrise * 1000);
	console.log(sunriseDate);
	var sunriseHours = sunriseDate.getHours();

	var sunriseMin = sunriseDate.getMinutes();
	if (sunriseMin < 10) {
		sunriseMin = "0" + sunriseMin;
	}

	//sunset

	var sunsetDate = new Date(sunset * 1000);
	console.log(sunsetDate);
	var sunsetHours = sunsetDate.getHours();
	var sunsetMin = sunsetDate.getMinutes();
	if (sunsetMin < 10) {
		sunsetMin = "0" + sunsetMin;
	}

	return (
		<div>
			<div
				className="flex items-center justify-center py-6
      text-xl text-cyan-300"
			>
				<p>{details}</p>
			</div>
			<div
				className="flex flex-row items-center justify-between
      text-white py-3"
			>
				<img
					src={iconUrlFromCode(icon)}
					alt="sun"
					className="w-20"
				></img>
				<p className="text-5xl">{`${temp.toFixed()}°`}</p>

				<div className="flex flex-col space-y-2">
					<div
						className="flex font-light text-sm items-center
            justify-center"
					>
						<UilTemperature
							size={18}
							className="mr-1"
						/>
						Real Feel:
						<span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
					</div>

					<div
						className="flex font-light text-sm items-center
            justify-center"
					>
						<UilTear
							size={18}
							className="mr-1"
						/>
						Humidity:
						<span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
					</div>

					<div
						className="flex font-light text-sm items-center
            justify-center"
					>
						<UilWind
							size={18}
							className="mr-1"
						/>
						Wind:
						<span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
				<UilSun />
				<p className="font-light">
					Rise:{" "}
					<span className="font-medium ml-1">{`${sunriseHours}:${sunriseMin} `}</span>
				</p>
				<p className="font-light">|</p>

				<UilSunset />
				<p className="font-light">
					Set:{" "}
					<span className="font-medium ml-1">{`${sunsetHours}:${sunsetMin} `}</span>
				</p>
				<p className="font-light">|</p>

				<UilArrowUp />
				<p className="font-light">
					High:{" "}
					<span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
				</p>
				<p className="font-light">|</p>

				<UilArrowDown />
				<p className="font-light">
					Low:{" "}
					<span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
				</p>
			</div>
		</div>
	);
}

export default TemperatureDetails;
