import React from 'react';
import Card from '../Card/Card';

const FavouriteContent = ({ favouriteJokes, setFavouriteJokes }) => {
	return (
		<div className="card-container">
			{favouriteJokes.length ? (
				<ul class="cards">
					{favouriteJokes?.map((joke) => (
						<Card
							joke={joke}
							key={joke.id}
							favouriteJokes={favouriteJokes}
							setFavouriteJokes={setFavouriteJokes}
						/>
					))}
				</ul>
			) : (
				<h1>No favourite jokes !</h1>
			)}
		</div>
	);
};

export default FavouriteContent;
