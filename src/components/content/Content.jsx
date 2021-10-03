import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './content.css';
// import { jokesObj } from '../sampleJokes';
import fetchJokes from '../../api/fetchJokes';

const Content = ({ favouriteJokes, setFavouriteJokes }) => {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		(async function getJokes() {
			const data = await fetchJokes();
			setJokes(data);
		})();
	}, []);

	return (
		<div className="card-container">
			{jokes.length ? (
				<ul class="cards">
					{jokes?.map((joke) => (
						<Card
							joke={joke}
							key={joke.id}
							setJokes={setJokes}
							jokes={jokes}
							favouriteJokes={favouriteJokes}
							setFavouriteJokes={setFavouriteJokes}
						/>
					))}
				</ul>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};

export default Content;
