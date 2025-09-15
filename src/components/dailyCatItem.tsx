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
        <div className="catPic">
            <h2><i className="fa-regular fa-heart"></i>Daily Cat</h2>
            <div className="img-container">
                {catImage && (
                    <img src={catImage.url} alt="Your daily cat image" width={catImage.width} height={catImage.height} />
                )}
                <p><i className="fa-solid fa-camera"></i>Photo of the Day</p>
            </div>
        </div>
        //cat img will mount twice, but that's because of the development environment
    )
}

export default DailyCatItem;