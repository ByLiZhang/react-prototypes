import React, { Component } from 'react';
import Movie from './movies';
import axios from 'axios';


class MoviesContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			movies: []
		};
	}

	componentWillMount(){
		const BASE_URL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
		axios.get(BASE_URL).then(resp =>{
			console.log(resp);
			this.setState({...this.state, movies: resp.data.feed.entry});
		});
	}

	render(){
		console.log(this.state);
		return (
			<div>
				<h2>Movie Container</h2>
				<Movie/>
			</div>
		);
	}
}

export default MoviesContainer;