import { useState, ReactElement, ReactNode } from 'react';

interface AccordionProps {
	children: ReactNode;
	title: string;
}

function Accordion({ children, title }: AccordionProps): ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={`bg-royalBlue-50/50 rounded border hover:bg-royalBlue-100 transition`}
		>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`p-2  w-full flex items-center`}
			>
				<span className="w-full text-left text-base md:text-xl">
					{title}
				</span>
				<i
					className={`material-icons text-3xl transition-all duration-700 text-royalBlue-700 ${
						isOpen ? 'rotate-0' : 'rotate-180'
					}`}
				>
					expand_more
				</i>
			</button>
			<div
				className={`transition-all duration-700 overflow-hidden ${
					isOpen ? ' max-h-screen' : ' max-h-0'
				}`}
			>
				{children}
			</div>
		</div>
	);
}

export default Accordion;
