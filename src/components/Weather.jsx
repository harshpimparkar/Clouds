import { useEffect, useState } from "react";
import Search from "./Search.jsx";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  //fetch api
  async function fetchWeatherApi(param) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=6048ef6ac93a74aeb420f23192ad4ef2`
      );
      const data = await res.json();
      console.log(data, "data");

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }
  // console.log(weatherData);
  //handle search button
  function handleSearch() {
    fetchWeatherApi(search);
  }

  return (
    <div className="weather-card">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>
          {" "}
          <img
            src="src\load-35_128.gif"
            alt="Loading..."
            className="loader"
          />
        </div>
      ) : (
        <div className="city-name">
          {weatherData ? (
            <div className="weather-info">
              <h2>
                {weatherData?.name}, <span>{weatherData?.sys.country}</span>
              </h2>
              <span>
                <h1>{weatherData?.weather[0].main}</h1>
                <h1>{Math.floor(weatherData?.main.temp - 273.15)} *C</h1>
              </span>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
