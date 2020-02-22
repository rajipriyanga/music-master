import React, { Component } from 'react';





const Artist = ({artist}) =>{
	if (!artist) return null;
	const { images,name,followers,genres} = artist;

	return(
		<div> 
			<h2>{name}</h2>
			<p> {followers.total} followers </p>
			<p> {genres.join(",")} </p>
			{images.map((image, i) =>(<span key={i}>

			<img 
				src = {image && image.url}
				style = {{
					width: 200,
					height:200
				}}
			/>

			</span>))}
			
		
		</div>
	);

}

export default Artist;