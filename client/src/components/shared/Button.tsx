import { IButton } from '@/types';
import { Link } from 'react-router-dom';

export const Button = ({ text, customClass, to }: IButton) => {
	return (
		<Link to={to} className={`button  ${customClass}`}>
			{text}
		</Link>
	);
};
