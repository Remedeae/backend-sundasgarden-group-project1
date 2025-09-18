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
    const iconOvercast : string = "fa-solid fa-cloud-sun";
    function weatherCodeToText(code: number): { weather: string; icon: string; } {
        const weatherMap: Record<number, { weather: string; icon: string; }> = {
            0: {
                weather : "Clear sky",
                icon : iconSnow,
            },
            1: {
                weather : "Mainly clear",
                icon : iconSnow,
            },   
            2: {
                weather : "Partly cloudy",
                icon : iconSnow,
            },
            3: {
                weather : "Overcast",
                icon : iconOvercast,
            },
            45: {
                weather : "Fog",
                icon : iconSnow,
            },
            48: {
                weather : "Depositing rime fog",
                icon : iconSnow,
            },
            51: {
                weather : "Drizzle: Light",
                icon : iconSnow,
            },
            53: {
                weather : "Drizzle: Moderate",
                icon : iconSnow,
            },
            55: {
                weather : "Drizzle: Dense",
                icon : iconSnow,
            },
            56: {
                weather : "Freezing drizzle: Light",
                icon : iconSnow,
            },
            57: {
                weather : "Freezing drizzle: Dense",
                icon : iconSnow,
            },
            61: {
                weather : "Rain: Slight",
                icon : iconSnow,
            },
            63: {
                weather : "Rain: Moderate",
                icon : iconSnow,
            },
            65: {
                weather : "Rain: Heavy",
                icon : iconSnow,
            },
            66: {
                weather : "Freezing rain: Light",
                icon : iconSnow,
            },
            67: {
                weather : "Freezing rain: Heavy",
                icon : iconSnow,
            },
            71: {
                weather : "Snow fall: Slight",
                icon : iconSnow,
            },
            73: {
                weather : "Snow fall: Moderate",
                icon : iconSnow,
            },
            75: {
                weather : "Snow fall: Heavy",
                icon : iconSnow,
            },
            77: {
                weather : "Snow grains",
                icon : iconSnow,
            },
            80: {
                weather : "Rain showers: Slight",
                icon : iconSnow,
            },
            81: {
                weather : "Rain showers: Moderate",
                icon : iconSnow,
            },
            82: {
                weather : "Rain showers: Violent",
                icon : iconSnow,
            },
            85: {
                weather : "Snow showers: Slight",
                icon : iconSnow,
            },
            86: {
                weather : "Snow showers: Heavy",
                icon : iconSnow,
            },
            95: {
                weather : "Thunderstorm: Slight or moderate",
                icon : iconSnow,
            },
            96: {
                weather : "Thunderstorm with slight hail",
                icon : iconSnow,
            },
            99: {
                weather : "Thunderstorm with heavy hail",
                icon : iconSnow,
            },

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

                            <i className={weatherCodeToText(weather.current.weather_code).icon} style={{ color: weatherObject.color }}></i>
                            {weather.current.temperature_2m} {weather.current_units.temperature_2m}<br></br>                            
                        </h1>
                    )}
                    {weather && weather.current && (
                        <p>{weatherCodeToText(weather.current.weather_code).weather}</p> 
                    

                    )}
                </div>
            </div>
            <div className="weather__details">
                {weather && weather.current && (
                    <WeatherItemDetail icon="fa-solid fa-temperature-full" color="#c76000ff" titel="Perceived temperature:" info={`${weather.current.apparent_temperature} ${weather.current_units.apparent_temperature}`} />
                )}
                {weather && weather.current && (
                    <WeatherItemDetail icon="fa-solid fa-cloud-sun" color="#000" titel="Wind speed:" info={`${weather.current.wind_speed_10m} ${weather.current_units.wind_speed_10m}`} />
                )}
                {weather && weather.current && (
                    <WeatherItemDetail icon="fa-solid fa-cloud-sun" color="#000" titel="Wind direction:" info={`${degToCompass(weather.current.wind_direction_10m)}`} />
                )}
                {weather && weather.current && (
                    <WeatherItemDetail icon="fa-solid fa-cloud-sun" color="#000" titel="Sunrise:" info={`${getTimeFromISO(weather.daily.sunrise[0])}`} />
                )}
                {weather && weather.current && (
                    <WeatherItemDetail icon="fa-solid fa-cloud-sun" color="#000" titel="Sunset:" info={`${getTimeFromISO(weather.daily.sunset[0])}`} />
                )}

            </div>
        </div >
    )
}

export default WeatherItemMain;
