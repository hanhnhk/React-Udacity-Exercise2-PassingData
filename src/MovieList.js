import React, { Component } from 'react';
import UserList from './UserList';

export default class MovieList extends Component {
	render() {
		const { movies, usersByMovie } = this.props;

		return <div>
			{Object.keys(movies).map((movieID) => {
				return (<div key={movieID}>
					<h2>{movies[movieID].name}</h2>					
					<UserList users={usersByMovie[movieID]}/>
				</div>);
			})}
			</div>
		;
				
	}
}