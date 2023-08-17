const formatForecastWeather = async (lat, lon) => {
	const url1 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=210ac60a5b2ecf53c3e5c596c0d9d9fa`;
	const data1 = await fetch(url1).then((res) => res.json());
	let { list } = data1;
	const daily = list.slice(1, 6).map((d) => {
		return {
			title: d.dt_txt,
			temp: d.main.temp,
			icon: d.weather[0].icon,
		};
	});
	return { daily };
};

export default formatForecastWeather;
