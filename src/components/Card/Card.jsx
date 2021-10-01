import React from 'react';
import './card.css';

const Card = ({ joke, setJokes, jokes, favouriteJokes, setFavouriteJokes }) => {
	const handleClick = (e) => {
		e.preventDefault();

		if (setJokes) {
			const removedJokes = jokes.filter((item) => item.id !== joke.id);
			const isJokePresent = favouriteJokes.find((item) => item.id === joke.id);

			if (!isJokePresent) {
				setFavouriteJokes([...favouriteJokes, joke]);
			}

			setJokes(removedJokes);
		} else {
			const removedJokes = favouriteJokes.filter((item) => item.id !== joke.id);
			setFavouriteJokes(removedJokes);
		}
	};

	return (
		<>
			<li className="cards_item">
				<div className="card">
					<div className="card_content">
						{joke.type === 'single' ? (
							<h2 className="card_title card_joke">{joke.joke}</h2>
						) : (
							<>
								<h2 className="card_title">{joke.setup}</h2>
								<p className="card_text">{joke.delivery}</p>
							</>
						)}

						<button className="btn card_btn" onClick={handleClick}>
							{setJokes ? 'Add me to favourites' : 'Remove joke'}
						</button>
					</div>
				</div>
			</li>
		</>
	);
};

export default Card;
