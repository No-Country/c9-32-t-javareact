import ReviewCard from './ReviewCard';

const REVIEW_DATA = [
	{
		userName: 'Usuario 1',
		stars: 5,
		asunto: 'asunto',
		descripcion:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	},
	{
		userName: 'Usuario 2',
		stars: 3,
		asunto: 'asunto',
		descripcion:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	},
	{
		userName: 'Usuario 3',
		stars: 4,
		asunto: 'asunto',
		descripcion:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	},
];

function Reviews() {
	return (
		<section className="my-12" id="Reseñas">
			<h2 className="heading2 text-center">
				Reseñas de nuestros
				<span className=" text-royalBlue font-semibold"> clientes</span>
			</h2>
			<div className="mt-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
					{REVIEW_DATA.map((review) => (
						<ReviewCard key={review.userName} review={review} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Reviews;
