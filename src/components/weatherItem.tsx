import type { WeatherItemType } from "../interfaces/weatherType";
import type { WeatherResponse } from "../interfaces/weatherResponse";
//import React from "react";
//import { useEffect } from "react";
import { useState } from "react";

function WeatherItem(props: WeatherItemType) {
    let styleColor={color: props.color};

    const [weather, setWeather] = useState({});

    const fetchData = async () => {
        try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=56.0467&longitude=12.6944&current=temperature_2m&timezone=Europe%2FBerlin");
        const data: WeatherResponse = await response.json();
        setWeather(data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    const generateWeather = () => {
        fetchData();
    };


    return (
        <div className="weather__details-item">
            <i className={props.icon} style={styleColor}></i>
            <div>
                <p>{props.titel}</p>
                <h6>{props.info}</h6>
            </div>
            <div>
                <button onClick={generateWeather}>Click for an updated weather prognosis</button>
                <p>{weather.current.temperature_2m} {weather.current_units.temperature_2m}</p>
            </div>;
        </div>
    )
}

export default WeatherItem

/* the react code from previous exercise
const API = () => {

    const [catfact, setCatFact] = useState({});

    const fetchData = async () => {
        try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        setCatFact(data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    const generateCatFact = () => {
        fetchData();
    };

    return (
    <div>
        <button onClick={generateCatFact}>Click for an interesting fact about cats</button>
        <p>{catfact.fact}</p>
    </div>);
    };

export default API;
*/ 

/* the ts code from previous exercise
type WeatherResponse = {
    current: {
        temperature_2m: number,
    }, 
    current_units: {
        temperature_2m: string,
    },
};

const wheatherInHelsingborg = async () => {
    try {
        const response: Response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=56.0467&longitude=12.6944&current=temperature_2m&timezone=Europe%2FBerlin`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data: WeatherResponse = await response.json();
        //const advice: string = data.slip.advice;
        console.log(`Temperature in Helsingborg right now: ${data.current.temperature_2m} ${data.current_units.temperature_2m}`);
    }  catch (error) {
        console.log(error);
    }  
};

wheatherInHelsingborg();
*/