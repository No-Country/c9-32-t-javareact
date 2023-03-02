

interface IServiceHero {
	title: string;
	text: string;
}

const ServiceSelectionHero = ({ title, text }: IServiceHero) => {
	return (
		<div className="lg:w-1/2">
			<h2 className="heading2 mb-1">{title}</h2>
			<p className="max-w-[800px]">{text}</p>
			
		</div>
	);
};
export default ServiceSelectionHero;
