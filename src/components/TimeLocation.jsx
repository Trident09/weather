import React from "react";

function TimeLocation({ weather: { timezone, name, country } }) {
	var d = new Date();
	var localTime = d.getTime();
	var localOffset = d.getTimezoneOffset() * 60000;
	var utc = localTime + localOffset;
	var cityOffset = utc + 1000 * timezone;
	const cityDate = new Date(cityOffset).toDateString().split(" ");
	const cityTime = new Date(cityOffset).toTimeString().split(" ");
	const [hrs, mins] = cityTime[0].split(":");

	return (
		<div>
			<div className="flex items-center justify-center my-6">
				<p className="text-white text-xl font-extralight">
					{`${cityDate[0]} ,     ${cityDate[1]} ${cityDate[2]} ${cityDate[3]}`}{" "}
					| Local Time : {`${hrs}:${mins}`}
				</p>
			</div>
			<div className="flex items-center justify-center my-3">
				<p className="text-white text-3xl font-medium">{` ${name}, ${country} `}</p>
			</div>
		</div>
	);
}

export default TimeLocation;
