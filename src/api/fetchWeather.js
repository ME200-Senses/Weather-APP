import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API = '0a92df8c16431b5504c1599453bf8692' ;

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL,
        {params: {
            q : query,
            units: 'metric',
            APPID: API,
        }
    });
    return data;
}