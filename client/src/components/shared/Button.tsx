import { IButton } from '@/types';

export const Button = ({ text, customClass, onClick }: IButton) => {
	return (
		<div className={`button  ${customClass}`} onClick={onClick}>
			{text}
		</div>
	);
};
