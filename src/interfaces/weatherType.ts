export type WeatherItemType = {
    icon : string,
    titel: string,
    info: string,
    color: string,
}

export type WeatherResponse = {
    current: {
        temperature_2m: number,
    }, 
    current_units: {
        temperature_2m: string,
    },
};