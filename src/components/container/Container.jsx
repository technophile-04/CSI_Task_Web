import React from 'react';
import Content from '../content/Content';
import Header from '../header/Header';
import './container.css';

const Container = () => {
	return (
		<div className="container">
			<Header />
			<Content />
		</div>
	);
};

export default Container;
