import React from 'react';
import './index.scss';

const Button = ({ title, onClick }) => {
	return (
		<div className="btn" onClick={onClick}>
			<span className="noselect">{title}</span>
		</div>
	);
};

export default Button;
