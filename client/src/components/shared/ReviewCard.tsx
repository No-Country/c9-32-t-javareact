import { ReactElement } from 'react';

type reviewT = {
	userName: string;
	stars: number;
	asunto: string;
	descripcion: string;
};

interface ReviewCardI {
	review: reviewT;
}

function ReviewCard({ review }: ReviewCardI): ReactElement {
	return (
		<div className="py-6  border-royalBlue border-dashed border-[1px] rounded-2xl  flex flex-col gap-4">
			<div className="flex flex-wrap justify-between items-center px-6 gap-4">
				<img
					alt="userImg"
					className="w-14 h-14  rounded-full"
					src="https://dummyimage.com/302x302"
				/>
				<span className="flex-grow text-xl">{review.userName}</span>
				<span className="flex justify-center items-center text-lg">
					{review.stars}
					<i className="material-icons text-yellow-500 ml-1">star</i>
				</span>
			</div>

			<img
				alt="testimonial"
				className="w-full h-52 object-cover object-center inline-block"
				src={`https://picsum.photos/500/350?random=${Math.random()}`}
			/>
			<div className="h-full px-6">
				<p className="text-gray-500">{review.asunto}</p>

				<p className="leading-relaxed">{review.descripcion}</p>
				<span className="inline-block h-1 w-10 rounded bg-indigo-500  " />
			</div>
		</div>
	);
}

export default ReviewCard;
