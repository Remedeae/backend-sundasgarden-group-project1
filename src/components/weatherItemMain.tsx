import type { WeatherResponse } from "../interfaces/weatherType";
import WeatherItemDetail from "./weatherItemDetail";
//import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function WeatherItemMain() {
    const location: string = "Helsinborg"   //dynamic?    
    let weatherObject = {   //idea with this is to make an object to display depending on weather gathered from API
        weather: "Heavy Snow",
        icon: "fa-regular fa-snowflake",
        color: "#9de6f0ff",
    }

    const [weather, setWeather] = useState<WeatherResponse | null>(null);

    const fetchData = async () => {

        try {
            const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=56.0467&longitude=12.6944&daily=sunrise,sunset&current=apparent_temperature,temperature_2m,wind_speed_10m,wind_direction_10m,weather_code&timezone=Europe%2FBerlin&forecast_days=1&wind_speed_unit=ms");
            const data: WeatherResponse = await response.json();
            setWeather(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    //via help from chatGPT
    function degToCompass(WindDirection: number): string {
        const directions = [
            "N", "NNE", "NE", "ENE",
            "E", "ESE", "SE", "SSE",
            "S", "SSW", "SW", "WSW",
            "W", "WNW", "NW", "NNW"
        ];
        const index = Math.floor((WindDirection + 11.25) / 22.5) % 16;
        return directions[index];
    }

    const iconSnow : string = "fa-regular fa-snowflake";
    function weatherCodeToText(code: number): string {
        const weatherMap: Record<number, string> = {
/*             0: {
                weather : "Clear sky",
                icon : iconSnow,
            } */
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            45: "Fog",
            48: "Depositing rime fog",
            51: "Drizzle: Light",
            53: "Drizzle: Moderate",
            55: "Drizzle: Dense",
            56: "Freezing drizzle: Light",
            57: "Freezing drizzle: Dense",
            61: "Rain: Slight",
            63: "Rain: Moderate",
            65: "Rain: Heavy",
            66: "Freezing rain: Light",
            67: "Freezing rain: Heavy",
            71: "Snow fall: Slight",
            73: "Snow fall: Moderate",
            75: "Snow fall: Heavy",
            77: "Snow grains",
            80: "Rain showers: Slight",
            81: "Rain showers: Moderate",
            82: "Rain showers: Violent",
            85: "Snow showers: Slight",
            86: "Snow showers: Heavy",
            95: "Thunderstorm: Slight or moderate",
            96: "Thunderstorm with slight hail",
            99: "Thunderstorm with heavy hail",
        };

        return weatherMap[code] ?? "Unknown weather code";
    }

    function getTimeFromISO(isoString: string): string {
        return isoString.split("T")[1]; // "19:21"
    }

    //const percivedTemperature :string | null = `${weather.current.apparent_temperature} ${weather.current_units.apparent_temperature}`

    return (
        <div className="weather">
            <div className='weather__main'>
                <h2><i className="fa-solid fa-cloud-sun"></i>Weather</h2>
                <div>
                    <p>{location}</p> {/* To dynamic */}
                    {weather && weather.current && (
                        <h1>
                            <i className={weatherObject.icon} style={{ color: weatherObject.color }}></i>
                            Weather update: {weatherCodeToText(weather.current.weather_code)}<br></br>
                            Temperature: {weather.current.temperature_2m} {weather.current_units.temperature_2m}<br></br>
                            Perceived temperature: {weather.current.apparent_temperature} {weather.current_units.apparent_temperature} <br></br>
                            Wind speed: {weather.current.wind_speed_10m} {weather.current_units.wind_speed_10m} <br></br>
                            Wind direction: {weather.current.wind_direction_10m} {weather.current_units.wind_direction_10m} {degToCompass(weather.current.wind_direction_10m)}<br></br>
                            The sun will rise at {getTimeFromISO(weather.daily.sunrise[0])} and go down at {getTimeFromISO(weather.daily.sunset[0])}
                        </h1>
                    )}
                    {weather && weather.current && (
                        <p>{weatherCodeToText(weather.current.weather_code)}</p> 
                    
                    )}
                </div>
            </div>
            <div className="weather__details">
                {weather && weather.current && (
                    <WeatherItemDetail icon="fa-solid fa-temperature-full" color="#c76000ff" titel="Perceived temperature:" info={`${weather.current.apparent_temperature} ${weather.current_units.apparent_temperature}`} />
                )}
                {weather && weather.current && (
                    <WeatherItemDetail icon="fa-solid fa-cloud-sun" color="#000" titel="Perceived temperature:" info={`${weather.current.apparent_temperature} ${weather.current_units.apparent_temperature}`} />
                )}
            </div>
        </div >
    )
}

export default WeatherItemMain;
