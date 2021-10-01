import React from 'react';
import './card.css';

const Card = ({ joke }) => {
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

						<button className="btn card_btn">Add me to favourites</button>
					</div>
				</div>
			</li>
		</>
	);
};

export default Card;
