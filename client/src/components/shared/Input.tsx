import { ReactElement, ComponentProps } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ComponentProps<'input'> {
	classes?: string;
	error?: boolean | undefined;
	helperText?: string | undefined;
	value?: string | undefined | number;
	register: any;
}

const inputClasses = {
	root: `group relative h-14 w-full rounded-md border border-royalBlue-400 focus-within:border-royalBlue-400  focus-within:ring-1 focus-within:ring-royalBlue-400 mb-2`,
	label: `absolute left-2 top-1/2 z-0 -translate-y-1/2 bg-white px-1 text-base pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-primary`,
	input: `z-10 h-full w-full rounded-md px-3.5 py-4 outline-none`,
};

function Input({
	placeholder,
	error = false,
	helperText,
	value,
	classes,
	register,
	...props
}: InputProps): ReactElement {
	return (
		<div
			className={`${inputClasses.root} ${classes} ${
				error && 'border-red-500'
			}`}
		>
			<label
				className={`${inputClasses.label} ${value && 'top-0 text-xs'} `}
				htmlFor={props.id ?? props.name}
			>
				{placeholder}
			</label>
			<input
				{...register}
				id={props.id ?? props.name}
				{...props}
				className={inputClasses.input}
			/>
			{helperText && (
				<span className={`text-xs ${error && 'text-red-500'}`}>
					{helperText}
				</span>
			)}
		</div>
	);
}

export default Input;
