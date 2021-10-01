import React from 'react';
import Content from '../content/Content';
import Header from '../header/Header';
import './container.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavouriteContent from '../favouriteContent/FavouriteContent';

const Container = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Header />
				<Switch>
					<Route path="/" exact>
						<Content />
					</Route>
					<Route path="/favourites">
						<FavouriteContent />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

/* 


*/

export default Container;
