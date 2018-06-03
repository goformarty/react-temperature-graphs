import axios from 'axios';

const API_KEY = '4773cc3307b9d9bdc674047d84db7058';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request,
	}; 
}