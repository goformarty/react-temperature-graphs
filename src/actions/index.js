import axios from 'axios';

const API_KEY = 'd097c73d379157316a57b1327c8fb7c7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?`;
const apid = `b6907d289e10d714a6e88b30761fae22`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request,
	}; 
}