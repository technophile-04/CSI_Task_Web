import React from 'react';
import Card from '../Card/Card';
import './content.css';
import { jokesObj } from '../sampleJokes';

const Content = () => {
	return (
		<div className="card-container">
			<ul class="cards">
				{jokesObj.jokes?.map((joke) => (
					<Card joke={joke} />
				))}
			</ul>
		</div>
	);
};

export default Content;
