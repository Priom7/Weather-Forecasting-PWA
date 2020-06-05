import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '1745818dfae8a89917e2ed09b971d01a'

export const fetchWeatherData = async (query) => {
    const { data } = await axios.get(URL, {
        params : {
            q : query,
            units : 'metric',
            APPID : API_KEY
        }
    })

    return data; 
}