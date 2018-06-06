import React, { Component } from 'react';
import Searchbar from '../containers/searchbar';
import WeatherList from '../containers/weather_list'

export default class App extends Component {
	render() {
		return ( 
			<div>
				<Searchbar />
				<WeatherList />
			</div>
		);
	}
}