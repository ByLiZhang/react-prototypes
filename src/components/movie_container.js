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
			this.setState({...this.state, movies: resp.data.feed.entry});
		});
	}

	render(){
		const movieList = this.state.movies.map((item, index)=>{
			return (
				<Movie key={index} info = {item} />
			);
		})
		return (
			<div>
				{movieList}
			</div>
		);
	}
}

export default MoviesContainer;