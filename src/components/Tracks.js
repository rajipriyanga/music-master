import React, { Component } from 'react';





class Tracks extends Component {

	render(){
		const { tracks } = this.props;

		return(

			<div>

				
				{

					tracks.map(track=>{
						const {id,name,album,duration_ms} = track;

						return(
							<div key={id}>
								<p> {name} 
								<img 
									src={album.images[0] && album.images[0].url} 
									style={{ width:100,height:100}}
								/>
								<span>{(duration_ms % (60 * 60)) / 60} </span>
								</p>
							</div>

						)

					})
				}
			</div>
		)

	}
}

export default Tracks;