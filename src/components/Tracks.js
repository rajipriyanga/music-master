import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/style.css';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



class Tracks extends Component {

	state = {playing: false,audio: null,playingPreviewUrl: null };

	playSong = previewUrl =>()=>{
		const audio = new Audio(previewUrl);
		if (!this.state.playing){
			audio.play();
			this.setState({playing: true, audio,playingPreviewUrl: previewUrl});
		}	
		else{
			this.state.audio.pause();
			if(this.state.playingPreviewUrl === previewUrl){
				this.setState({playing: false});
			}
			else{
				audio.play();
				this.setState({playing: true, audio,playingPreviewUrl: previewUrl});
			}
		}
	}
	trackIcon = track =>{
		if (!track.preview_url)
		{
			return( <i className="fa fa-ban"></i>);
		}
		
		if (this.state.playing && this.state.playingPreviewUrl === track.preview_url){
			return( <i className="fa fa-pause"></i>);
		}

		return (<i className="fa fa-play"></i>);
	}


	render(){

		const { tracks } = this.props;
		const options = {
		    nav: true,
		    dots:false,
		    slidesToShow: 3,
  			slidesToScroll: 1,
		};


		return(

			<div className="top-tracks">
				
				<OwlCarousel
				    options={options}
				>
				
				<h2>Top Tracks { tracks.length}</h2>
				{

					tracks.map(track=>{
						const {id,name,album,duration_ms,preview_url} = track;

						return(
							<div className = "track-card mt-3" 
								key={id} 
								style={{  
								  backgroundImage: "url(" + album.images[0].url+ ")",
								  backgroundPosition: 'center',
								  backgroundSize: 'cover',
								  backgroundRepeat: 'no-repeat'
								}}
								onClick={this.playSong(preview_url)}
								>
								<span className="track-card-overlay  track-icon">
									{this.trackIcon(track)}
								</span>
								<div className="track-title">
									{name}
								</div>
								
							</div>

						)

					})
				}
				</OwlCarousel>
			</div>
		)

	}
}

export default Tracks;