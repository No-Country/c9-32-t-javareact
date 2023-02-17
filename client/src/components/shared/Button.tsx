
import React from 'react';
import { Link } from 'react-router-dom';
import { IButton } from '../../types';

export const Button = ({ text, customClass, to }: IButton) => {
	return (
		<Link to={to} className={`button  ${customClass}`}>
			{text}
		</Link>
	);
};
