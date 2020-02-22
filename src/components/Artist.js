import React, { Component } from 'react';





const Artist = ({artist}) =>{
	if (!artist) return null;
	const { images,name,followers,genres} = artist;

	return(
		<div className="artist-cover" 
			style={{  
			  backgroundImage: "url(" + artist.images[0].url+ ")",
			  backgroundPosition: 'center',
			  backgroundSize: 'cover',
			  backgroundRepeat: 'no-repeat'
			}}
		 > 
		 	<div className="row">
			 	<div className="col-lg-3 col-md-3 col-12 artist-profile">
			 			<img 
					src = {images[0] && images[0].url}
					style = {{
						width: 200,
						height:200
					}}
				/>
			 	</div>
			 	<div className="col-lg-9 col-md-9 col-12 artist-info">
			 		<h2>{name}</h2>
					<p> {followers.total} followers </p>
					<p> {genres.join(",")} </p>
			 	</div>
			</div>
			
			
			
		
		</div>
	);

}

export default Artist;