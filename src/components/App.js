import React, { Component } from 'react';






import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';
const API_ADDRESS = "https://spotify-api-wrapper.appspot.com/";
class App extends Component {

	state = {artist:null,tracks: [] };

	searchArtist =artistQuery =>{

		fetch(`${API_ADDRESS}/artist/${artistQuery}`)
		.then(response => response.json())
		.then( json=> {
			if (json.artists.total >0){
				const artist = json.artists.items[0];
				this.setState({artist});

				fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
				.then( response =>response.json())
				.then (json=>{
					const tracks = json.tracks;
					this.setState({tracks: json.tracks});
					console.log('this.state.tracks',this.state);
				})
				.catch(error=> alert(error.message));
			}
		})
		.catch(error=> alert(error.message));
		

	}

  	render() {
	    return (
	    	<div className="p-3 bg-dark text-white">
		        <div className="col-12 col-lg-12">
			      	<div className="search-container"> 
				      	<h2> Music Maseter</h2>		
				      	<Search searchArtist={this.searchArtist}/> 		      
			      	</div>

	      			<Artist artist={this.state.artist} /> 
	      			<Tracks tracks={this.state.tracks} /> 
	      		</div>
	      	</div>	
	    );
	  }
}

export default App;
