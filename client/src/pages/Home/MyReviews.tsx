import ReviewCard from '@components/shared/ReviewCard';

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

function MyReviews() {
	return (
		<section className="my-12 " id="Reseñas">
			<h3 className="heading3 ">Tus Reseñas</h3>
			<div className="mt-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-14">
					{REVIEW_DATA.map((review) => (
						<ReviewCard key={review.userName} review={review} />
					))}
				</div>
			</div>
		</section>
	);
}

export default MyReviews;
