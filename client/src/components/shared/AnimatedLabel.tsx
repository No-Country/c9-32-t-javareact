import React from 'react';

type Floating = {
	name: string;
	customClass:string
};

export const FloatingLabel = ({ name, customClass }: Floating) => {
	return (
		<label className={`${customClass} `}>
			{name}
		</label>
	);
};
