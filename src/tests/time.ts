export type WeatherResponse = {
    latitude: number,
    longitude: number,
    current: {
        time: string,
        temperature_2m: number,
        apparent_temperature: number,
        wind_speed_10m: number,
        wind_direction_10m: number,
        weather_code: number,
    },
    current_units: {
        time: Date,
        temperature_2m: string,
        apparent_temperature: string,
        wind_speed_10m: string,
        wind_direction_10m: number,
        weather_code: number,
    },
    daily_units: {
        sunrise: string,
        sunset: string,
    },
    daily: {
        sunrise: string,
        sunset: string,
    },
};

//let data : WeatherResponse;
const fetchData = async () => {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=56.0467&longitude=12.6944&daily=sunrise,sunset&current=apparent_temperature,temperature_2m,wind_speed_10m,wind_direction_10m,weather_code&timezone=Europe%2FBerlin&forecast_days=1&wind_speed_unit=ms");
        const data : WeatherResponse = await response.json();
        console.log(data.daily.sunrise);
        const sunUpDate = data.daily.sunrise[0];
        const sunUpTime = sunUpDate.substring(11,16);
        console.log(sunUpTime);

        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

fetchData();



function toLocalISOString(date: Date) {
    date = new Date
    const tzOffset = date.getTimezoneOffset() / -60; // offset in ms
    //  const localTime = new Date(date - tzOffset);
    //  return localTime.toISOString().slice(0, -1); // remove trailing 'Z'
    console.log(tzOffset);
}