import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { IButton } from '../../types';

type buttonVariants = 'contained' | 'outlined';

const buttonVariantStyles: Record<buttonVariants, string> = {
	contained: 'bg-royalBlue text-white hover:bg-royalBlue-600',
	outlined: 'text-royalBlue border-2 border-royalBlue',
};

interface buttonProps {
	variant?: buttonVariants;
	classes?: string;
	children: ReactNode;
	element?: HTMLElement | ReactNode | any;
	[x: string]: any;
}

export const Button = (props: buttonProps) => {
	const {
		element = 'button',
		variant = 'contained',
		classes,
		children,
		...rest
	} = props;
	const CustomButton = element;
	return (
		<CustomButton
			{...rest}
			className={`button ${buttonVariantStyles[variant]} ${classes}`}
		>
			<div>{children}</div>
		</CustomButton>
	);
};

export default Button;
