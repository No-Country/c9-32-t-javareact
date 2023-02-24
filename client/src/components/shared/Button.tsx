import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { IButton } from '../../types';

const buttonVariantStyles: Record<string, string> = {
	contained: 'bg-royalBlue text-white hover:bg-royalBlue-600',
	outlined: 'text-royalBlue border-2 border-royalBlue',
};

interface buttonProps {
	variant?: 'contained' | 'outlined';
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
			<span>{children}</span>
		</CustomButton>
	);
};
