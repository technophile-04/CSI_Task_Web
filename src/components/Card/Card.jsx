import React from 'react';
import './card.css';

const Card = ({ joke }) => {
	return (
		<>
			<li class="cards_item">
				<div class="card">
					<div class="card_content">
						<h2 class="card_title">Card Grid Layout</h2>
						<p class="card_text">{joke.joke ? joke.joke : joke.setup}</p>
						<button class="btn card_btn">Read More</button>
					</div>
				</div>
			</li>
		</>
	);
};

export default Card;
