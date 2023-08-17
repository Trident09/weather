import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import formatForecastWeather from "./services/hourly_daily";
import getFormattedWeatherData from "./services/WeatherService";
import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";

function App() {
	const [query, setQuery] = useState({ q: "New Delhi" });
	const [units, setUnits] = useState("metric");
	const [weather, setWeather] = useState(null);
	const [weather2, setWeather2] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			const message = query.q ? query.q : "current location.";
			toast.info("Fetching weather for " + message);
			await getFormattedWeatherData({ ...query, units }).then(
				async (data) => {
					toast.success(
						`Successfully fetched weather for ${data.name}, ${data.country}.`
					);
					setWeather(data);
					const data2 = await formatForecastWeather(
						data.lat,
						data.lon
					);
					setWeather2(data2);
				}
			);
		};
		fetchWeather();
	}, [query, units]);

	const { daily } = { ...weather2 };
	const formatBackground = () => {
		if (!weather) return "from-cyan-600 to-blue-600 ";
		const threshold = units === "metric" ? 27 : 60;
		if (weather.temp <= threshold) return "from-cyan-600 to-blue-600 ";

		return "from-orange-500 to-yellow-500";
	};

	return (
		<div
			className={`mx-auto max-w-screen-md mt-6 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
		>
			<TopButtons setQuery={setQuery} />
			<Inputs
				setQuery={setQuery}
				units={units}
				setUnits={setUnits}
			/>

			{weather && (
				<div>
					<TimeLocation weather={weather} />
					<TemperatureDetails weather={weather} />
					<Forecast
						title="Hourly Forecast"
						items={daily}
					/>
				</div>
			)}
			<ToastContainer
				autoClose={5000}
				theme="colored"
				newestOnTop={true}
			/>
		</div>
	);
}

export default App;
