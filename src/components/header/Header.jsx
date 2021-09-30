import React from 'react';
import './header.css';

const Header = () => {
	return (
		<div className="header-container">
			<div className="header-container__block">
				<h1 className="header-container__title">Jokes</h1>
				<h1 className="header-container__title">Favourites</h1>
			</div>
		</div>
	);
};

export default Header;
