import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

export default class Searchbar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value, this.state);
		this.setState( {term: event.target.value} );
	}

	onFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favourite city"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary" > Submit</button>
				</span>
			</form>
		);
	}
}
