import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './content.css';
// import { jokesObj } from '../sampleJokes';
import fetchJokes from '../../api/fetchJokes';

const Content = () => {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		(async function getJokes() {
			const data = await fetchJokes();
			setJokes(data);
		})();
	}, []);

	return (
		<div className="card-container">
			<ul class="cards">
				{jokes?.map((joke) => (
					<Card joke={joke} key={joke.id} />
				))}
			</ul>
		</div>
	);
};

export default Content;
