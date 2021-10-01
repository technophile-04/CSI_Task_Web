import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header-container">
			<div className="header-container__block">
				<Link to="/">
					<h1 className="header-container__title">Jokes</h1>
				</Link>
				<Link to="/favourites">
					<h1 className="header-container__title">Favourites</h1>
				</Link>
			</div>
		</div>
	);
};

export default Header;
