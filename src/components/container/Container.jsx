import React, { useState } from 'react';
import Content from '../content/Content';
import Header from '../header/Header';
import './container.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavouriteContent from '../favouriteContent/FavouriteContent';

const Container = () => {
	const [favouriteJokes, setFavouriteJokes] = useState([]);

	return (
		<BrowserRouter>
			<div className="container">
				<Header />
				<Switch>
					<Route path="/" exact>
						<Content
							favouriteJokes={favouriteJokes}
							setFavouriteJokes={setFavouriteJokes}
						/>
					</Route>
					<Route path="/favourites">
						<FavouriteContent
							favouriteJokes={favouriteJokes}
							setFavouriteJokes={setFavouriteJokes}
						/>
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

/* 


*/

export default Container;
