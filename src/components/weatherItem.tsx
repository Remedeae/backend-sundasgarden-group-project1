

function WeatherItem() {
    <div className="weather__details-item">
        <i className={weatherItemIcon}></i>
        <div>
            <p>{props.weatherItemTitel}</p>
            <p>{props.weatherItemInfo}</p>
        </div>
    </div>
}
export default WeatherItem