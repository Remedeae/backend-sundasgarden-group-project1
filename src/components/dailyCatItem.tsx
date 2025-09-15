//import type { WeatherItemType } from "../interfaces/weatherType";
import type { CatResponse } from "../interfaces/catResponse";
//import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DailyCatItem() {
    //let styleColor={color: props.color};

    const [catImage, setCatImage] = useState<CatResponse | null>(null);

    const fetchData = async () => {
        try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data: CatResponse[] = await response.json();
        setCatImage(data[0]);
        } catch (error) {
        console.error("Error fetching image:", error);
        }
    };

    useEffect(() => {
    fetchData();
    }, []);

    return (
        <div className="weather__details-item">
            {/*<i className={props.icon} style={styleColor}></i>
            <div>
                <p>{props.titel}</p>
                <h6>{props.info}</h6>
            </div>*/}
            <div>
                {catImage && (
                <img src={catImage.url} alt="Your daily cat image" width={catImage.width} height={catImage.height}/>
                )}
            </div>
        </div>
    )
}

export default DailyCatItem;