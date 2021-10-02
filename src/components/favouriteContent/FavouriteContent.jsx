import React from 'react';
import Card from '../Card/Card';

const FavouriteContent = ({ favouriteJokes, setFavouriteJokes }) => {
	return (
		<div className="card-container">
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
		</div>
	);
};

export default FavouriteContent;
