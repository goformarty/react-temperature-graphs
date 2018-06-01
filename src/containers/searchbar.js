import React, { Component } from 'react';

export default class Searchbar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}
	render() {
		return (
			<form className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favourite city"
					className="form-control"
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary" > Submit</button>
				</span>
			</form>
		);
	}
}