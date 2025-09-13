import type { WeatherItemType } from "../interfaces/weatherType"

function WeatherItem(props: WeatherItemType) {
    let styleColor={color: props.color};
    return (
        <div className="weather__details-item">
            <i className={props.icon} style={styleColor}></i>
            <div>
                <p>{props.titel}</p>
                <h6>{props.info}</h6>
            </div>
        </div>
    )
}

export default WeatherItem