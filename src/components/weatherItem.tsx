import type { WeatherItemType } from "../interfaces/weatherType";
import type { WeatherResponse } from "../interfaces/weatherResponse";
//import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function WeatherItem(props: WeatherItemType) {
    let styleColor={color: props.color};

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
        <div className="weather__details-item">
            <i className={props.icon} style={styleColor}></i>
            <div>
                <p>{props.titel}</p>
                <h6>{props.info}</h6>
            </div>
            <div>
                {weather && weather.current && (
                <p>{weather.current.temperature_2m} {weather.current_units.temperature_2m}</p>
                )}
            </div>
        </div>
    )
}

export default WeatherItem;
