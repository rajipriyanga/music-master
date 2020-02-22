import React, { Component } from 'react';

class Search extends Component {



	state = {artistQuery: ''};

	updateArtistQuery= event =>{
		this.setState({artistQuery: event.target.value})
	}

	handleKeyPress = event =>{
		if (event.key == 'Enter'){
			this.searchArtist();
		}
	}
	searchArtist =() =>{
		this.props.searchArtist(this.state.artistQuery);
	}

	render(){
		return(
			<div className="p-3">
					<input 
				      	 onChange={this.updateArtistQuery}
				      	 onKeyPress={this.handleKeyPress}
				      	 placeholder="search for an artist" 
				      	/>
				    <button className="btn btn-info"onClick={this.searchArtist} > Search </button>
			</div>
		)
	}
}

export default Search;