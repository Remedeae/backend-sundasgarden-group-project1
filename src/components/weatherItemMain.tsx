import type { WeatherResponse } from "../interfaces/weatherResponse";
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
            const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=56.0467&longitude=12.6944&current=temperature_2m&timezone=Europe%2FBerlin");
            const data: WeatherResponse = await response.json();
            setWeather(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className='weather__main'>
                <h2><i className="fa-solid fa-cloud-sun"></i>Weather</h2>
                <div>
                    <p>{location}</p> {/* To dynamic */}
                    {weather && weather.current && (
                        <h1>
                            <i className={weatherObject.icon} style={{ color: weatherObject.color }}></i>
                            {weather.current.temperature_2m} {weather.current_units.temperature_2m}
                        </h1>
                    )}
                    <p>{weatherObject.weather}</p> {/* To dynamic */}

                    <p>^^Maybe insert more dynamic data here?^^</p> {/* To highlight comment */}
                </div>
            </div>

        </div >
    )
}

export default WeatherItemMain;
